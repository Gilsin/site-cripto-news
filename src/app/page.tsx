import React from 'react';
import "./layout"
import Cabeca from './components/header'
import Footer from './components/Footer'
import Main from './components/Main'
export default function Home() {
  return (
    <div className="absolute inset-0 z-0" style={{
      backgroundImage: 'url("https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
    }}> 
      
   <Cabeca />
   <Main /> 


   <Footer />   
   
    </div>
  )
}
