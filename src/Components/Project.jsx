import React, { useState } from 'react'
import ss1 from './ss1.png'
import ss2 from './Textutils.png'
import ss3 from './inventory1.png'
import todo from './todo.png'
import psd from './password.png'

function Project() {
  const [showimage,setShowimage]=useState(false);
  const handleclick=()=>{
    setShowimage(!showimage);
  }
  const [showimage1,setShowimage1]=useState(false);
  const handleclick1=()=>{
    setShowimage1(!showimage1);
  }
  const [showimage2,setShowimage2]=useState(false);
  const handleclick2=()=>{
    setShowimage2(!showimage2);
  }
  const [showimage3,setShowimage3]=useState(false);
  const handleclick3=()=>{
    setShowimage3(!showimage3);
  }
  const [showimage4,setShowimage4]=useState(false);
  const handleclick4=()=>{
    setShowimage4(!showimage4);
  }
  return (
    <div className='bg-gradient-to-b from-color-background to to-blue-900  pt-8 pb-10 h-full'>
      <div className='flex flex-col md:flex-col  justify-center items-center p-10 gap-2 mt-4 mb-9'>
        
        <h3 className='text-3xl text-color-text md:text-6xl'>Internship</h3>
        <div className='w-3/4 md:w-1/2 flex flex-col md:flex-col  justify-center items-center p-10 gap-2 mt-4 mb-9 border border-xl border-yellow-500 rounded-2xl  shadow-md shadow-yellow-500'>
        <h2 className='text-2xl text-white'>Durvasa Infotech</h2>
        <p className='text-xl text-color-text text-justify'>Led the development and implementation of a robust task management system, streamlining workflow processes, enhancing team collaboration, and significantly improving project efficiency and delivery timelines.</p>
       <p className='text-xl text-color-text text-justify'>	Increased user engagement by 20% through intuitive design and a streamlined feedback process.</p>
       
        
        </div>
        <div className='w-3/4 md:w-1/2 flex flex-col md:flex-col  justify-center items-center p-10 gap-2 mt-4 mb-9 border border-xl  border-yellow-500 rounded-2xl  shadow-md shadow-yellow-500'>
        <h2 className='text-2xl text-white p-4'>Techomax solution</h2>
        <p className='text-xl text-color-text text-justify'>Created accessible ,responsive, and functional user interfaces to allow visitors on any device to have same perfect user experience.</p>
        <p className='text-xl text-color-text text-justify'>Built mock designs and wireframes for landing pages for 5 new product concept.
	Created the user experience that fetched, parsed ,and formatted analytic data, and relayed into React Component.
</p>
        
        </div>
        
      </div>
       
       <div className='grid place-items-center text-color-text text-4xl md:text-6xl '>My Projects</div>

       <div className='flex flex-col justify-center items-center pt-7 gap-10 '>
          <div className=' w-1/2 pl-5 pr-5 flex flex-col justify-center items-center shadow-md shadow-yellow-500 border border-2xl border-yellow-500 rounded-2xl'>           
            <h2 className='text-white text-2xl md:text-4xl pt-15 '>Design Agency</h2>
            <h3 className='text-yellow-200  text-xl md:text-2xl p-2'>Language:Reactjs ,Bootstrap</h3>
            <button 
            className='bg-white text-black text-2xl shadow-md shadow-yellow-500 border border-black w-fit h-fit p-4 m-5 rounded-xl'
            onClick={handleclick}
            >Preview...</button>
            {
              showimage &&  <img 
              className=''
              src={ss1}/>
            }
          </div>
          <div className=' w-1/2 pl-5 pr-5 flex flex-col justify-center items-center border border-2xl shadow-md shadow-yellow-500 border-yellow-500 rounded-2xl'>
            
            <h2 className='text-white  text-2xl md:text-4xl pt-15'>Todo List</h2>
            <h3 className='text-yellow-200 text:xl md:text-2xl p-2'>Language: Reactjs ,Tailwind</h3>
            <button 
            className='bg-white text-black text-2xl shadow-md shadow-yellow-200 border border-black w-fit h-fit p-4 m-5 rounded-xl'
            onClick={handleclick3}
            >Preview...</button>
            {
              showimage3 &&  <img 
              className=''
              src={todo}/>
            }
          </div>
          <div className='w-1/2 pl-5 pr-5 flex flex-col justify-center items-center border border-2xl border-yellow-500 shadow-md shadow-yellow-500 rounded-2xl'>
            
            <h2 className='text-white  text-2xl md:text-4xl pt-15'>Random Secure Password Generator</h2>
            <h3 className='text-yellow-200 text-xl md:text-2xl p-2'>Language: Reactjs ,Tailwind</h3>
            <button 
            className='bg-white text-black text-2xl shadow-md shadow-yellow-500 border border-black w-fit h-fit p-4 m-5 rounded-xl'
            onClick={handleclick4}
            >Preview...</button>
            {
              showimage4 &&  <img 
              className=''
              src={psd}/>
            }
          </div>
          <div className=' w-1/2 pl-5 pr-5 flex flex-col justify-center items-center shadow-md shadow-yellow-500   border border-2xl border-yellow-500 rounded-2xl'>
            
            <h2 className='text-white text-2xl md:text-4xl pt-15'>Text Utils</h2>
            <h3 className='text-yellow-200 text-xl md:text-2xl p-2'>Language:Reactjs ,Bootstrap</h3>
            <button 
            className='bg-white text-black text-2xl shadow-md shadow-yellow-500 border border-black w-fit h-fit p-4 m-5 rounded-xl'
            onClick={handleclick1}
            >Preview...</button>
            {
              showimage1 &&  <img 
              className=''
              src={ss2}/>
            }
          </div>
          <div className='w-1/2 pl-5 pr-5 flex flex-col justify-center items-center  shadow-md shadow-yellow-500 border border-2xl border-yellow-500 rounded-2xl'>
            
            <h2 className='text-white  text-2xl md:text-4xl pt-15'>Inventory And Stock Managment</h2>
            <h3 className='text-yellow-200  text-xl md:text-2xl p-2'>Language:HTML, CSS, Javascript, Boostrap,PHP</h3>
            <button 
            className='bg-white text-black text-2xl shadow-md shadow-yellow-200 border border-black w-fit h-fit p-4 m-5 rounded-xl'
            onClick={handleclick2}
            >Preview...</button>
            {
              showimage2 &&  <img 
              className=''
              src={ss3}/>
            }
          </div>
       </div>
    </div>
  )
}

export default Project
