import React from 'react'
import about from './about.png'
function About() {
  return (
    <div className='bg-gradient-to-t from-color-background to to-blue-900  pt-8 pb-10 h-full'>
      <div className='grid place-items-center text-color-text text-4xl md:text-6xl '>Education</div>

      <div className='flex flex-col md:flex-row '>
      <div className='md:pt-[250px] md:pl-[115px] pl-8 gap-8 pr-8 pt-5'>
        <div className='flex flex-col justify-center items-center  border border-yellow-500 rounded-3xl p-10 gap-8 shadow-md shadow-yellow-500'>
          <h2 className='md:text-5xl text-2xl text-white'>
            School: S.V.E.M </h2>
          <h2 className='md:text-3xl text-xl text-yellow-200'>S.S.C: 89 %</h2>
          <h2 className='md:text-3xl text-xl text-yellow-200'>H.S.C: 71%</h2>
          <h2  className='md:text-5xl  text-2xl  text-white'>University:G.T.U</h2>
          <h2 className='md:text-3xl text-xl text-yellow-200'>B. Tech (C.S.E)</h2>
          <h2 className='md:text-3xl text-xl text-yellow-200'>C.G.P.A : 8.84 </h2>
        </div>
      </div>
      <div className='mt-15 pt-12 '><img src={about}/></div>
      </div>
    </div>
  )
}

export default About
