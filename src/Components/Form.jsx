import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("xrgnkwor");
  if (state.succeeded) {
      return <p className='text-2xl text-white bg-blue-900 p-4 '>Thanks for Contact me!</p>;
  }
  return (
    
    <div className='bg-gradient-to-t from-color-background to to-blue-900 h-fit'>
       <div className='p-5 '>
        <h3 className='grid place-items-center text-color-text text-4xl md:text-6xl mt-10 pt-14'>Hire me...!</h3>
      <h3 className='grid place-items-center text-white text-2xl md:text-4xl mt-10 '>9925382454</h3>
      <h3 className='grid place-items-center text-white text-2xl md:text-4xl mt-10 '><a> digna2972@gmail.com</a></h3>
        <div className='flex flex-col justify-center items-center'>

        <form  onSubmit={handleSubmit}
        
        className='flex flex-col justify-center items-center p-5 mt-8 border border-yellow-500 rounded-2xl w-fit'>
          <input type='text'
          name='name'
          id='name'
          className='text-black p-2 m-4 border border-yellow-500 rounded-2xl'
          placeholder=' Enter Your Name'
          required
          onChange={(event)=>event.target.value}
          />
          <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
          <br/>
          <input type='number' 
          name='number'
          id='number'
          className=' p-2 m-2 border border-yellow-500 rounded-2xl  text-black'
          placeholder='Enter your Phone Number'
          required
          onChange={(event)=>event.target.value}/>
          <ValidationError 
        prefix="number" 
        field="number"
        errors={state.errors}
      />
          <br/>
          <input type='email'
          name='email'
          id='email'
          required
          className='text-black p-2 m-2 border border-yellow-500 rounded-2xl'
          placeholder='Enter Your Email'
          onChange={(event)=>event.target.value}/>
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          <br/>
          <input type='textarea'
          name='message'
          id='message'
          required
          className='text-black p-2 m-2 border border-yellow-500 rounded-2xl'
          placeholder='Enter a Message'
          onChange={(event)=>event.target.value}
          />
          <ValidationError 
        prefix="message" 
        field="message"
        errors={state.errors}
      />
          <input
          className='text-white p-2 m-2 border border-yellow-500 rounded-2xl' 
          type='submit'
          disabled={state.submitting}
          
          />
        </form>
        </div>
        
        </div> 
      
    </div>
  )
}

export default Form
