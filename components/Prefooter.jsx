import { motion } from 'framer-motion'
import React from 'react'

const Prefooter = () => {




    return (
        <div className='border-t-[2px] border-zinc-900 w-auto max-h-full bg-[#CDEA68] text-zinc-900'>
            <div className='# text-center  py-20 font-bold'>
                {["ready", "to start", "the project?"].map((item, index) => {
                    return (
                        <h1 className=" pt-[2vw] -mb-[1vw] uppercase text-[12vw] leading-[10vw] tracking-tighter ">
                            {item}
                        </h1>
                    );
                })}
            </div>
            <div className='pb-20'>
                <button className='flex gap-5 px-20 py-4 mb-5 mx-auto border-zinc-900 bg-zinc-800 uppercase items-center text-zinc-100 text-center rounded-full border-[2px] hover:bg-transparent hover:text-zinc-800 hover:border-zinc-800'>start the project
                    <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
                </button>
                <h1 className='text-center text-[25px] mb-4'>OR</h1>
                <button className='flex gap-5 px-20 py-4  mx-auto border-zinc-900 bg-transparent uppercase items-center text-zinc-900 text-center rounded-full border-[2px] hover:bg-zinc-800 hover:text-zinc-100 hover:child-zinc-100'>hello@ochi.design
                    <div className='w-2 h-2 rounded-full bg-zinc-800 hover:bg-zinc-100'></div>

                </button>
            </div>
        </div>
    )
}

export default Prefooter