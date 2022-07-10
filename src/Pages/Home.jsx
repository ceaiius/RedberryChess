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
            <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:1}}>CHESS SAYS <span className='h1span'>a lot about</span> <br></br>WHO WE ARE</motion.h1>
            <Link style={style} to="/Personal"><motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1, duration:1.5}} className='starting-button'>Get Started</motion.button></Link>
        </div>
    </motion.div>
  )
}
