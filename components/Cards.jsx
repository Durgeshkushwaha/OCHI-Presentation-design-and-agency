import React from 'react'

const Cards = () => {
    return (
        <div  className='flex gap-10 w-full h-screen bg-zinc-200 items-center px-32'>
            <div className="cardcontainer h-[60vh] w-1/2">
                <div className="card relative rounded-xl w-full h-full  bg-[#004D43] flex items-center justify-center">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <div className='absolute px-5 py-1 border-2 rounded-full left-10  bottom-10'>&copy;2021-2024</div>
                </div>
            </div>
            <div className="cardcontainer flex gap-5 h-[60vh]  w-1/2">
                <div className="card relative flex items-center cursor-pointer justify-center rounded-xl w-1/2 h-full bg-[#192826]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute px-5 py-1 border-2 rounded-full left-10 font-semibold bottom-10 hover:bg-zinc-300 hover:text-zinc-900 hover:border-zinc-900'>RATING 5.0 ON CLUTCH</button>
                </div>
                <div className="card relative flex items-center cursor-pointer justify-center rounded-xl w-1/2 h-full bg-[#192826]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute px-5 py-1 border-2 rounded-full left-10 font-semibold bottom-10 hover:bg-zinc-300 hover:text-zinc-900  hover:border-zinc-900'>BUSINESS BOOTCAMP ALUMNI</button>
                </div>

            </div>

        </div>
    )
}

export default Cards