import React from 'react';
import "./layout"
import Cabeca from './components/header'
import Footer from './components/Footer'
import Main from './components/Main'
export default function Home() {
  return (
    <div> 
   <Cabeca />
   <Main /> 
   <Main />
   <Main />
   <Footer />   
   
    </div>
  )
}
