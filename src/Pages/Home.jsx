import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import {motion} from "framer-motion"
export default function Home() {

const style = {
  color:"white",
  textDecoration : "none"
}

  return (
    <motion.div className='container' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}>
        <div className='leftDiv'>
            <Header/>
            
           <div className='img-container'>
                
           </div>
            
        </div>

        <div className='rightDiv'>
            <h1>CHESS SAYS <span className='h1span'>a lot about</span> <br></br>WHO WE ARE</h1>
            <Link style={style} to="/Personal"><button className='starting-button'>Get Started</button></Link>
        </div>
    </motion.div>
  )
}
