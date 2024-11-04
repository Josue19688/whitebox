
import { HOW_IT_WORKS_CONTENT } from "@/constants/index"
import {motion} from 'framer-motion'


const containerVariants={
  hidden:{opacity:0},
  visible:{opacity:1, transition:{stranggerChildren:0.2}}
}

const fadeInUp={
  hidden:{opacity:0, y:20},
  visible:{opacity:1, y:0, transition:{duration:0.6}}
}

export const BlogPage = () => {
    return (
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
                    {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
                        <div key={index} className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col justify-between text-center">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                                <p className="text-neutral-400 mb-4">{step.description}</p>
                            </div>
                            <div className="flex justify-center">
                                <img src={step.imageSrc} alt={step.imageAlt} className="rounded-lg" />
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div className="flex -space-x-2"></div>
                                <a href={step.url} target="_blank" className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-4 rounded-lg">
                                    Leer más...
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.section>

    )
}
