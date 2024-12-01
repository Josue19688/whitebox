
import Modal from "@/components/private/ModalArticulo"
import { HOW_IT_WORKS_CONTENT } from "@/constants/index"
import { useArticuloStore } from "@/stores/articulo/articulo.store"
import {motion} from 'framer-motion'
import { useEffect, useState } from "react"



const containerVariants={
  hidden:{opacity:0},
  visible:{opacity:1, transition:{stranggerChildren:0.2}}
}

const fadeInUp={
  hidden:{opacity:0, y:20},
  visible:{opacity:1, y:0, transition:{duration:0.6}}
}

export const BlogPage = () => {

    const articles = useArticuloStore((state)=>state.articles);
    const fetchArticlesPublic = useArticuloStore((state)=>state.fetchArticlesPublic);

    useEffect(() => {
        
        fetchArticlesPublic();
      }, [fetchArticlesPublic]);
    
      const [isOpen, setIsOpen] = useState(false); // Controla la visibilidad del modal
      const [currentArticuloId, setCurrentArticuloId] = useState<string | null>(null); // Controla el ID del artículo
    
      const handleOpenModal = (id: string) => {
        setCurrentArticuloId(id); // Establece el ID actual del artículo
        setIsOpen(true); // Abre el modal
      };
    
      const handleCloseModal = () => {
        setIsOpen(false); // Cierra el modal
        setCurrentArticuloId(null); // Limpia el ID
      };

    return (
        <>
         <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-28 lg:pt-36">
            <motion.div  variants={fadeInUp}
            className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12 border-t border-neutral-800">
                

                    <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                        {HOW_IT_WORKS_CONTENT.sectionTitle}
                    </h2> 
                    <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
                        {HOW_IT_WORKS_CONTENT.sectionDescription}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((articulo) => (
                        <div className="card sm:card-side max-w-xs sm:max-w-sm bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row">
                        <figure className="flex-shrink-0 w-full sm:w-1/3">
                         <img
                           src={articulo.blocks[1]?.data.file?.url}
                           alt={articulo.blocks[1]?.data.text}
                           className="object-cover w-full h-36 sm:h-36 md:h-44 "
                         />
                       </figure>
                       <div className="card-body p-4 flex flex-col">
                         <div>
                           <h5 className="card-title text-sm sm:text-base font-medium text-gray-800 mb-2">{articulo.blocks[0]?.data.text}</h5>
                           <p className="mb-3 text-xs text-gray-500">Publicado : {new Date(articulo.createdAt).toLocaleString()}</p> {/* Fecha de creación */}
                         </div>
                         
                         {/* Botón "Leer más" */}
                         <div className="mt-2">
                           <button 
                           type="button"
                           onClick={() => handleOpenModal(articulo.id)}
                           className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white w-full sm:w-auto py-1 px-2 font-medium rounded-md transition-colors text-xs sm:text-sm">
                             Leer más
                           </button>
                         </div>
                       </div>
                     </div>
                       
                    ))}
                </div>
            </motion.div>
        </motion.section>
        {/* Modal */}
       <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        articuloId={currentArticuloId}
      />
        </>
       

    )
}

