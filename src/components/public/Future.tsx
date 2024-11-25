
import CodeLogo from '@/assets/code.jpg';
import { checklistItems } from '@/constants/index';
import { RiCheckboxCircleLine } from '@remixicon/react';

export const Future = () => {
  return (
    <section>
        <div className='max-w-7xl mx-auto px-4 mt-20'>
            <div className="mt-20">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
                Acelera tu Flujo de{""}
                    <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
                     Trabajo Tecnológico
                    </span>
                </h2>
                <div className="flex flex-wrap justify-center pt-4 ">
                    <div className="p-2 w-full lg:w-1/2  ">
                        <img src={CodeLogo}  alt="code" />
                    </div>
                    <div className='pt-12 w-full lg:w-1/2'>
                        {
                            checklistItems.map((item, index)=>(
                                <div key={index} className='flex mb-12'>
                                    <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                                        <RiCheckboxCircleLine/>
                                    </div>
                                    <div>
                                        <h5 className='mt-1 mb-2 text-xl'>
                                            {item.title}
                                        </h5>
                                        <p className='text-md text-neutral-500'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}