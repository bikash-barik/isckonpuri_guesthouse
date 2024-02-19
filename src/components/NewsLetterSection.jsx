import React from 'react'

export default function NewsLetterSection() {
  return (
    <div className='w-full h-[400px] px-10 flex items-center justify-center'>
        <div className='max-w-4xl space-y-6'>
           <h1 className='md:text-3xl text-xl text-center'>SUBSCRIBE TO OUR NEWSLETTER</h1>
           <input type="text" className='w-full outline-none border-b-2 border-orange-500 p-5 placeholder:text-center placeholder:text-xl placeholder:text-black' placeholder='enter your email' />
           <button className='w-full py-4 bg-orange-500 hover:bg-black text-xl text-white'>Join</button>
        </div>
    </div>
  )
}

