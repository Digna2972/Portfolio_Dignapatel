import React, { useState } from 'react'

function Navbar() {
  
    const[show,setShow]=useState(false);
    const handleonclick=()=>{
      setShow(!show);
    
  }
  return (
    <div>
      <nav className='h-[112px] bg-gradient-to-b from-color-background to to-blue-900 '>
       
        <div>
            <ul 
            className=' hidden md:flex md:flex-row items-center justify-center md:gap-[147px] md:pt-[45px] md:pd-[50px] text-white text-3xl '>
                <li className='shadow-xl hover:shadow-slate-300 hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:px-4 hover:py-1'><a>Home</a></li>
                <li className='shadow-xl hover:shadow-slate-300 hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:px-4 hover:py-1'><a>Skill</a></li>
                <li className='shadow-xl hover:shadow-slate-300 hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:px-4 hover:py-1'><a>Education</a></li>
                <li className='shadow-xl hover:shadow-slate-300 hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:px-4 hover:py-1'><a>My project</a></li>
                <li className='shadow-xl hover:shadow-slate-300 hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:px-4 hover:py-1'><a>About</a></li>
            </ul>
        </div>
        <div className='md:hidden text-white text-3xl justify-between pt-8 pl-3 pr-5 items-end flex flex-row relative '> 
        <div>
            <h3 className='text-white text-3xl'>Digna2972</h3>
        </div>
        <div className='relative' >
        <ion-icon 
        
        onClick={handleonclick}
        className='h-full '
        name="menu"></ion-icon>
        </div>
        {show  && (
           <ul 
           className='absolute h-full mt-4 w-full top-12 p-4  bg-gradient-to-bl from-color-background to to-blue-900 rounded-lg    '>
               <li className='shadow-xl hover:shadow-slate-300 hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:px-4 hover:py-1'><a>Home</a></li>
               <li className='shadow-xl hover:shadow-slate-300 hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:px-4 hover:py-1'><a>Skill</a></li>
               <li className='shadow-xl hover:shadow-slate-300 hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:px-4 hover:py-1'><a>Education</a></li>
               <li className='shadow-xl hover:shadow-slate-300 hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:px-4 hover:py-1'><a>My project</a></li>
               <li className='shadow-xl hover:shadow-slate-300 hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:px-4 hover:py-1'><a>About</a></li>
           </ul>

        )
        }
                </div>
      </nav>
    </div>
  )
}

export default Navbar
