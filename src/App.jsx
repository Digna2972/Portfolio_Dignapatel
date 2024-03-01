import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skill from './Components/Skill'
import Project from './Components/Project'
import About from './Components/About'
import Contact from './Components/Contact'
import Form from './Components/Form'



function App() {
  

  return (
    <>
      <div className='overflow-x-hidden '>
        <Navbar/>
        <Home/>
        <Skill/>
        <About/>
        <Project/>
        <Form/>
        <Contact/>
        
        
      </div>
        
    </>
  )
}

export default App
