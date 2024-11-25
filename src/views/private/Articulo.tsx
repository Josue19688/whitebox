
import { motion } from 'framer-motion'
import { useState } from 'react';
import Editor from '@/components/private/Editor.js'
import { useArticuloStore } from '@/stores/articulo/articulo.store';
import { notyf } from '@/utils/Notif';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { stranggerChildren: 0.2 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// Initial Data
const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "This is my awesome editor!",
        level: 1,
      },
    },
  ],
};

export const Articulo = () => {
  const createArticulo = useArticuloStore((state) => state.createArticulo);

  const [data, setData] = useState(INITIAL_DATA);


  const handleSubmit = async (data) => {
    try {
      //validateData(data);
      await createArticulo(data);

      notyf.success('¡Operación exitosa!');
    } catch (error) {
      notyf.error('¡Operacion fallida, vuelva a intentarlo!');
      throw new Error('Error al crear el articulo!')
      
    }

  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-8 lg:pt-1 ">
      <motion.div variants={fadeInUp}
        className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12  border-neutral-800">
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-900 via-neutral-300 to-neutral-900 bg-clip-text text-transparent">
            Crear Articulo
          </h2>

        </div>
        <div className="bg-base-100 w-full rounded-lg shadow">
          <div className='editor-wrapper mt-5'>
            <Editor data={data} onChange={setData} editorblock="editorjs-container" />
            <button
              className="m-10 border border-red-400 rounded-md p-2 hover:border-green-300"
              onClick={() => {
                handleSubmit(data);
              }}
            >
              Save
            </button>
          </div>
        </div>

      </motion.div>
    </motion.section>
  )
}
