import React from 'react'
import Header from '../components/Header'
import rocket from "../assets/rocket.png"

export default function Completed() {
  return (
    <div className='container'>
        <div className='leftDivCompleted'>
            <Header/>
            <div className='img-container-completed'>

            </div>
        </div>
        <div className='rightDivCompleted'>
            <div className='rocketDiv'>
                <img src={rocket}/>
                <h1>Onboarding completed!</h1>
            </div>
        </div>
    </div>
  )
}
