import React from 'react'

function Form() {
  
  return (
    
    <div className='bg-gradient-to-t from-color-background to to-blue-900 h-fit'>
       <div className='p-5 '>
        <h3 className='grid place-items-center text-color-text text-4xl md:text-6xl mt-10 pt-14'>Hire me...!</h3>
      <h3 className='grid place-items-center text-white text-2xl md:text-4xl mt-10 '>9925382454</h3>
      <h3 className='grid place-items-center text-white text-2xl md:text-4xl mt-10 '><a> digna2972@gmail.com</a></h3>
        <div className='flex flex-col justify-center items-center'>

        <form 
        
        className='flex flex-col justify-center items-center p-5 mt-8 border border-yellow-500 rounded-2xl w-fit'>
          <input type='text'
          className='text-black p-2 m-4 border border-yellow-500 rounded-2xl'
          placeholder=' Enter Your Name'
          onChange={(event)=>event.target.value}
          />
          <br/>
          <input type='number' 
          className=' p-2 m-2 border border-yellow-500 rounded-2xl  text-black'
          placeholder='Enter your Phone Number'
          onChange={(event)=>event.target.value}/>
          <br/>
          <input type='email'
          className='text-black p-2 m-2 border border-yellow-500 rounded-2xl'
          placeholder='Enter Your Email'
          onChange={(event)=>event.target.value}/>
          <br/>
          <input type='textarea'
          className='text-black p-2 m-2 border border-yellow-500 rounded-2xl'
          placeholder='Enter a Message'
          onChange={(event)=>event.target.value}
          />
          <input
          className='text-white p-2 m-2 border border-yellow-500 rounded-2xl' 
          type='submit'
          
          />
        </form>
        </div>
        
        </div> 
      
    </div>
  )
}

export default Form
