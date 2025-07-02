import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import TechnicalProficiency from './sections/TechnicalProficiency'
import AboutMe from './sections/AboutMe'
import MyProject from './sections/MyProject'
import ContactMe from './sections/ContactMe'
import Footer from './sections/Footer'


const App = () => {
  return (
    <div className='lg:px-20'>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <TechnicalProficiency/>
      <MyProject/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App