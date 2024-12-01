
import { HERO_CONTENT } from '@/constants/index'

import { motion } from 'framer-motion'
import { KeyFeatures } from '@/components/public/KeyFeatures'
import { Testinomial } from '@/components/public/Testimonial'
import { Future } from '@/components/public/Future'
import { Hero } from '@/components/public/Hero'


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { stranggerChildren: 0.2 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// const fadeIn={
//   hidden:{opacity:0},
//   visible:{opacity:1,  transition:{duration:0.6}}
// }


export function HomePage() {
  return (
    <>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-28  lg:pt-48">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <motion.div
            variants={fadeInUp}
            className="mb-8 border border-neutral-800 px-3 py-2 rounded-full text-xs">
            {HERO_CONTENT.badgeText}
          </motion.div>
          <Hero />


          <motion.p variants={fadeInUp} className="mt-6 text-neutral-400 max-w-xl">
            {HERO_CONTENT.subHeading}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 items-center"
          >
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-orange-500 text-white py-3 px-6 rounded-lg font-medium text-center"
            >
              {HERO_CONTENT.callToAction.primary}
            </a>
            <a
              href="#"
              className="inline-block border border-gray-500 hover:border-gray-400 text-white py-3 px-6 rounded-lg font-medium text-center"
            >
              {HERO_CONTENT.callToAction.secondary}
            </a>
          </motion.div>


          <div className="py-10 ">
            <motion.p variants={fadeInUp} className="text-gray-400 text-center mb-8">
              {HERO_CONTENT.trustedByText}
            </motion.p>

          </div>



        </div>
      </motion.section>
      <Future />
      <KeyFeatures />
      <Testinomial />
    </>
  );
}

