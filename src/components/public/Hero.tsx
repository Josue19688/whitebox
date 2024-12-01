import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <div className="my-12 relative mb-14 flex justify-center rounded-full items-center py-10">
            <motion.div
                whileHover={{
                    scale: 2, // Aumentar el tamaño al pasar el mouse
                    transition: { type: "spring", stiffness: 300, damping: 20 }, // Transición suave
                }}
                className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,theme(colors.blue.500))_border-box]"
            >
                <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                    <div className="flex h-44 w-44 items-center justify-center rounded-full bg-transparent shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <img
                            src="/lgo.png"
                            alt="logo"
                            className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-48 lg:h-48 rounded-full bg-transparent"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
