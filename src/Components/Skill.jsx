import React from 'react'
import css from './html.jpeg'
import html from './css.jpeg'
import js from './js.jpeg'
import github from './github.jpeg'
import react from './react.jpeg'
import tailwind from './tail.jpeg'
import bootstrap from './bootstrap.jpeg'
import nodejs from './node.jpg'
import mongo from './mongo.png'
import mysql from './mysql.jpg'
function Skill() {
  return (
    <div className='bg-gradient-to-b from-color-background to to-blue-900  pt-8 pb-10 h-full'> 
      <div className='grid place-items-center text-color-text text-4xl md:text-6xl mt-10 pt-14'>My Skills</div>
        <div className=' hidden md:flex  md:flex-row justify-center items-center gap-10 pt-10  pl-20 pr-20 ml-6 mr-6'>
          <div className='
           flex flex-col md:flex-col  md:border hover:scale-125 transition duration-500 cursor-pointer   md:border-slate-200 md:border-xl md:rounded-full p-9 justify-center items-center gap-3 md:shadow-md md:shadow-yellow-500'>
          <img
          className='h-1/4 w-1/4'
          src={html} />
          <h3 className='text-2xl  text-yellow-300 md:text-4xl '>HTML</h3>        
          </div>
          <div className='flex flex-col md:flex-col  md:border md:-slate-200 md:border-xl hover:scale-125 transition duration-500 cursor-pointer md:rounded-full p-9 justify-center items-center gap-3 md:shadow-md md:shadow-yellow-500'>
          <img 
          className='h-1/4 w-1/4'
          src={css} />
          <h3 className=' text-2xl text-yellow-300 md:text-4xl'>CSS</h3>        
          </div>
          <div className='flex flex-col md:flex-col  md:border hover:scale-125 transition duration-500 cursor-pointer md:border-slate-200 md:border-xl md:rounded-full p-9 justify-center items-center gap-3 md:shadow-md md:shadow-yellow-500'>
          <img 
          className='h-1/4 w-1/4'
          src={js} />
          <h3 className='text-2xl text-yellow-300 md:text-4xl'>JS</h3>        
          </div>
          <div className= 'flex flex-col md:flex-col  md:border hover:scale-125 transition duration-500 cursor-pointer md:border-slate-200 md:border-xl md:rounded-full p-9 justify-center items-center gap-3 md:shadow-md md:shadow-yellow-500'>
          <img 
          className='h-1/4 w-1/4'
          src={github} />
          <h3 className='text-2xl text-yellow-300 md:text-4xl'>Github</h3>        
          </div>
         
        </div>
        <div className='md:flex hidden md:flex-row justify-center items-center gap-10 pt-10 w-full pl-16 pr-20 ml-6 mr-6'>
          <div className=' md:w-1/4
           flex flex-col md:flex-col  md:border hover:scale-125 transition duration-500 cursor-pointer md:border-slate-200 md:border-xl md:rounded-full p-9 justify-center items-center gap-3 md:shadow-md md:shadow-yellow-500'>
          <img
          className='h-1/4 w-1/4'
          src={react} />
          <h3 className='text-2xl  text-yellow-300 md:text-4xl'>React JS</h3>        
          </div>
          <div className='md:w-1/4  flex flex-col md:flex-col hover:scale-125 transition duration-500 cursor-pointer md:border md:border-slate-200 md:border-xl md:rounded-full p-9 justify-center items-center gap-3 md:shadow-md md:shadow-yellow-500'>
          <img 
          className='h-1/4 w-1/4'
          src={tailwind} />
          <h3 className='text-2xl text-yellow-300 md:text-4xl'>Tailwind</h3>        
          </div>
          <div className='md:w-1/4 flex flex-col md:flex-col md:border hover:scale-125 transition duration-500 cursor-pointer md:border-slate-200 md:border-xl md:rounded-full p-9 justify-center items-center gap-3 md:shadow-md md:shadow-yellow-500'>
          <img 
          className='h-1/4 w-1/4'
          src={bootstrap} />
          <h3 className='text-2xl text-yellow-300 md:text-4xl'>bootstrap</h3>        
          </div>
         
         
        </div>
        <div className='md:flex hidden md:flex-row justify-center items-center gap-10 pt-10 w-full pl-16 pr-20 ml-6 mr-6'>
          <div className=' md:w-1/4
           flex flex-col md:flex-col hover:scale-125 transition duration-500 cursor-pointer  md:border md:border-slate-200 md:border-xl md:rounded-full p-9 justify-center items-center gap-3 md:shadow-md md:shadow-yellow-500'>
          <img
          className='h-1/4 w-1/4'
          src={nodejs} />
          <h3 className='text-2xl  text-yellow-300 md:text-4xl'>Node JS</h3>        
          </div>
          <div className='md:w-1/4  flex flex-col md:flex-col hover:scale-125 transition duration-500 cursor-pointer md:border md:border-slate-200 md:border-xl md:rounded-full p-9 justify-center items-center gap-3 md:shadow-md md:shadow-yellow-500'>
          <img 
          className='h-1/4 w-1/4'
          src={mongo} />
          <h3 className='text-2xl text-yellow-300 md:text-4xl'>Mongo db</h3>        
          </div>
          <div className='md:w-1/4 flex flex-col hover:scale-125 transition duration-500 cursor-pointer md:flex-col md:border md:border-slate-200 md:border-xl md:rounded-full p-9 justify-center items-center gap-3 md:shadow-md md:shadow-yellow-500'>
          <img 
          className='h-1/4 w-1/4'
          src={mysql} />
          <h3 className='text-2xl text-yellow-300 md:text-4xl'>My SQL</h3>        
          </div>
         
         
        </div>
        <div className='flex flex-col md:hidden h-fit mx-4 rounded-xl my-4'>                 
            <div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='gap-8 flex flex-row w-3/4 text-center my-2 backdrop-blur-sm bg-white/50 p-5 rounded-xl shadow-xl border-b-2 border-orange-500 hover:bg-orange-300 hover:shadow-orange-500'><img
                     className='w-10 mx-3' src={html} alt="" />
                     <h3 className='text-2xl p-3 font-bold  '>HTML</h3>
                     </div>
                    <div className=' gap-8 flex flex-row w-3/4 text-center my-2 backdrop-blur-sm bg-white/50 p-5 rounded-xl shadow-xl border-b-2 border-blue-500 hover:bg-blue-300 hover:shadow-blue-500'>
                      <img className='w-10 mx-3' src={css} alt="" />
                      <h3 className='text-2xl p-3 font-bold  '>CSS</h3>
                      </div>
                    <div className='flex flex-row gap-8 w-3/4 text-center my-2 backdrop-blur-sm bg-white/50 p-5 rounded-xl shadow-xl border-b-2 border-yellow-500 hover:bg-yellow-200 hover:shadow-yellow-500'>
                      <img className='w-10 mx-3' src={js} alt="" />
                      <h3 className='text-2xl p-3 font-bold  '>JavaScript</h3>
                      </div>
                    <div className='flex flex-row gap-8 w-3/4 text-center my-2 backdrop-blur-sm bg-white/50 p-5 rounded-xl shadow-xl border-b-2 border-sky-500 hover:bg-sky-300 hover:shadow-sky-500'>
                      <img className='w-10 mx-3' src={react} alt="" />
                      <h3 className='text-2xl p-3 font-bold  '>React Js</h3>
                      </div>
                      <div className='flex flex-row gap-8 w-3/4 text-center my-2 backdrop-blur-sm bg-white/50 p-5 rounded-xl shadow-xl border-b-2 border-sky-500 hover:bg-sky-300 hover:shadow-sky-500'>
                      <img className='w-10 mx-3' src={nodejs} alt="" />
                      <h3 className='text-2xl p-3 font-bold  '>Node Js</h3>
                      </div>
                    <div className='flex flex-row gap-8 w-3/4 text-center my-2 backdrop-blur-sm bg-white/50 p-5 rounded-xl shadow-xl border-b-2 border-sky-500 hover:bg-sky-300 hover:shadow-sky-500'>
                      <img className='w-10 mx-3' src={tailwind} alt="" />
                      <h3 className='text-2xl p-3 font-bold  '>Tailwind</h3>
                      </div>
                    <div className='flex flex-row w-3/4 gap-8  text-center my-2 backdrop-blur-sm bg-white/50 p-5 rounded-xl shadow-xl border-b-2 border-violet-500 hover:bg-violet-300 hover:shadow-violet-500'>
                      <img className='w-10 mx-3' src={bootstrap} alt="" />
                      <h3 className='text-2xl p-3 font-bold  '>Bootstrap</h3>
                      </div>
                    <div className='flex flex-row w-3/4 gap-8  text-center my-2 backdrop-blur-sm bg-white/50 p-5 rounded-xl shadow-xl border-b-2 border-violet-500 hover:bg-violet-300 hover:shadow-violet-500'>
                      <img className='w-10 mx-3' src={github} alt="" />
                      <h3 className='text-2xl p-3 font-bold  '>Github</h3>
                      </div>
                      <div className='flex flex-row w-3/4 gap-8  text-center my-2 backdrop-blur-sm bg-white/50 p-5 rounded-xl shadow-xl border-b-2 border-violet-500 hover:bg-violet-300 hover:shadow-violet-500'>
                      <img className='w-10 mx-3' src={mongo} alt="" />
                      <h3 className='text-2xl p-1 font-bold  '>Mongo Db</h3>
                      </div>
                      <div className='flex flex-row w-3/4 gap-8  text-center my-2 backdrop-blur-sm bg-white/50 p-5 rounded-xl shadow-xl border-b-2 border-violet-500 hover:bg-violet-300 hover:shadow-violet-500'>
                      <img className='w-10 mx-3' src={mysql} alt="" />
                      <h3 className='text-2xl p-3 font-bold  '>My Sql</h3>
                      </div>
                </div>
            </div>
        
        </div>
      
    </div>
  )
}

export default Skill
