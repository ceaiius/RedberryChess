import React, { useEffect, useContext} from 'react'
import Header from '../components/Header'
import rocket from "../assets/rocket.png"
import { FormContext } from '../components/FormContext';

export default function Completed() {
  const {setValues} = useContext(FormContext);
  useEffect(()=>{
    setValues({
      name: "",
      email: "",
      phone: "",
      birth: "",
      level: "",
      grandmaster: "",
      question: ""
    })
  },[])
return (
<div className='container'>
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
</div>
)
}