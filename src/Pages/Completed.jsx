import React, { useEffect, useContext} from 'react'
import Header from '../components/Header'
import rocket from "../assets/rocket.png"
import { FormContext } from '../components/FormContext';
import {motion} from "framer-motion"

export default function Completed() {
  const {setValues} = useContext(FormContext);
  useEffect(()=>{
    setValues({
      name: "",
      email: "",
      phone: "",
      birth: "",
      level: "",
      grandmaster: ""
    })
  },[])
return (
<motion.div className='container' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}>
  <div className='leftDivCompleted'>
    <Header />
    <div className='img-container-completed'>

    </div>
  </div>
  <div className='rightDivCompleted'>
    <div className='rocketDiv'>
      <img src={rocket} />
      <h1>Onboarding completed!</h1>
    </div>
  </div>
</motion.div>
)
}