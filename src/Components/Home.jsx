import React from 'react'
import img1 from './home.png'
import digna from './digna1.jpg'
import {ReactTyped} from "react-typed";

function Home() {
  const handlevent=()=>{
    window.location.href='https://drive.google.com/file/d/1fzouUEX21cB403ituhGeO6Qo7b1l7srR/view?usp=drive_link'
  }
  return (
    <div className="bg-gradient-to-t from-color-background to to-blue-900 h-fit">
        <div className='flex flex-col md:flex-row  gap-5 h-3/4' >
            <div className='   md:pt-[100px] md:w-1/2'>
              <img 
              className='hover:'
              src={img1}/>
            </div>
         <div className=' flex flex-col justify-center items-center gap-4 md:w-1/2'>  
        
        <div className='mt-8 pt-4 text-white text-5xl  md:pt-[112px] bg-clip-text text-transparent bg-gradient-to-t from-pink-200 to to-yellow-500 '>
          Digna patel</div> 
        <div className='text-white md:text-6xl grid place-items-center pt-10  text-3xl h-1/4 pb-6 mb-5'>
            {" "}
          <ReactTyped
            strings={["React Developer"]}
            typeSpeed={100}
            loop
            backSpeed={100}
            cursorChar="!"
            showCursor={true}
          />
        </div> 
        <p className='text-white mt-3 mx-3 text-xl italic p-4 items-center justify-center '> My name is Digna Patel and I am currently pursuing a B.Tech in Computer Science and Engineering from GTU, with an expected graduation date in 2024. My interests include Javascript, React Js, HTML, CSS,Bootstrap ,Tailwind Web Development and creating websites using HTML/CSS. I am passionate about technology and strive to stay up-to-date with the latest advancements in the field. I am also keen on website development and its design. </p>            
                  <button 
                  onClick={handlevent}
                  className=' mt-15 shadow-md shadow-yellow-500 text-2xl 
                  md:text-4xl text-yellow-300 hover:text-white hover:bg-yellow-500 hover:text rounded-full p-4 m-auto md:ml-30 mx-auto 
                  '>Download CV</button>
            </div>
        </div>
      </div>
    
  )
}

export default Home

