import React from 'react'
import swiss from "../assets/swiss.jpg"
import { ImageContentSectionParagraph } from '../Textfiles/webiste-Content'

export default function ImageContentSection() {
  return (
    <div className='w-full md:h-[600px] relative'>
      <img src={swiss} alt="" className='w-full h-full object-cover' />
      <div className='absolute left-0 top-0 md:py-0 py-10 md:px-0 px-10 
      md:flex md:flex-col md:justify-center md:items-center w-full h-full bg-black bg-opacity-50
      justify-center items-center '>
        <h1 className='md:text-6xl text-2xl font-semibold text-white mb-5'>Try Hosting</h1>
        <p className='text-white line-clamp-3 md:line-clamp-5 tracking-wider max-w-2xl'>
            {ImageContentSectionParagraph}
        </p>
        <button className='py-2 px-6 mt-4 text-white rounded bg-orange-500 hover:bg-red-500'>Read More</button>
      </div>
    </div>
  )
}
