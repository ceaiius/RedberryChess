import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
export default function Home() {

    const style = {
        color:"white",
        textDecoration : "none"
    }

  return (
    <div className='container'>
        <div className='leftDiv'>
            <Header/>
            
           <div className='img-container'>
                
           </div>
            
        </div>

        <div className='rightDiv'>
            <h1>CHESS SAYS <span className='h1span'>a lot about</span> <br></br>WHO WE ARE</h1>
            <Link style={style} to="/Personal"><button className='starting-button'>Get Started</button></Link>
        </div>
    </div>
  )
}
