import React from 'react'
import image from "../assets/home-image.png"
import Header from '../components/Header'
export default function Home() {
  return (
    <div className='home-container'>
        <div className='leftDiv'>
            <Header/>
            
           <div className='img-container'>
                
           </div>
            
        </div>

        <div className='rightDiv'>
            <h1>CHESS SAYS <span className='h1span'>a lot about</span> <br></br>WHO WE ARE</h1>
            <button>Get Started</button>
        </div>
    </div>
  )
}
