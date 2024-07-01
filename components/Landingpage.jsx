import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900  pt-1'>
      <div className='textstruture mt-52 px-20'>
        {["We create", "Eye-opening", "presentations"].map((item, index) => {
          return (
            <div className='masker'>
              <div className='w-fit flex items-end overflow-hidden'>
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}

                  className=' mr-5  w-[8vw] h-[5.0vw] rounded-md -top-[1.2vw]  bg-green-500'
                  >
                    <div>
                      <img className='rounded-md w-[8vw] h-[5.5vw] mr-5  ' src="https://www.logodesign.net/images/business-card-mockup.png" alt="" />
                    </div>
                  </motion.div>
                )}
                <h1 className=" pt-[2vw] -mb-[1vw] uppercase text-[6vw] leading-[6vw] font-['Founders_Grotesk_X-Condensed']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}

      </div>
      <div className="border-t-[1px] border-zinc-100 mt-20 flex justify-between items-center py-5 px-20">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p className='text-2xl font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start flex items-center gap-5'>
          <div className='px-5 py-2 border-[1px] border-zinc-400 font-bold text-md uppercase rounded-full cursor-pointer hover:bg-zinc-300 hover:text-zinc-900'> start the project</div>
          <div className='w-10 h-10 border-[1px] border-zinc-400 flex items-center justify-center rounded-full cursor-pointer hover:bg-zinc-300 hover:text-zinc-900'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Landingpage