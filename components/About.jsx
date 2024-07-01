import React from 'react'

const About = () => {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech
        businesses that need to raise funds, sell prod­ucts,
        ex­plain com­plex ideas, and hire great peo­ple.
      </h1>
      <div className='w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#a1b562]'>
        <div className='flex   space-x-96'>
          <div><h1 className='text-2xl'>What you can expect:</h1></div>
          <div>
            <h1 className='text-2xl'>
              We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
              <br></br>
              <br></br>
              We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
            </h1>
          </div>
        </div>

      </div>
      <div className='w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#a1b562]'>
        <div className='w-1/2'>
          <h1 className='text-7xl'>Our approach:</h1>
          <button className=' flex gap-10 items-center uppercase px-10 py-6 bg-zinc-800 border-[2px] border-zinc-800 rounded-full mt-10 text-white hover:border-zinc-100'> Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-full rounded-3xl bg-[#b0c859]'>
          <img className='rounded-3xl' src="https://s1.1zoom.me/big3/928/Men_Two_Shadow_Brown_haired_Smile_Costume_554550_6200x4110.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About