import React from 'react'
import Header from "../components/Header"
import one from "../assets/1.png"
import two from "../assets/2.png"
import Input from '../components/Input'
import { Link } from 'react-router-dom'
export default function () {

    const handleFocus = (e) => {
        e.currentTarget.type = "date"
    }

    const handleBlur = (e) => {
        e.currentTarget.type = "text"
        console.log(e.currentTarget);
    }

    const style = {
        color:"white",
        textDecoration : "none"
    }

  return (
    <div className='container'>
        <div className='leftDivPersonal'>
            <Header/>
            <div className='img-container-personal'>
                <h1>"WHEN YOU SEE A GOOD MOVE, <br></br>LOOK FOR A BETTER ONE."
                <br></br> <span>-EMANUEL LASKER</span></h1>
               
           </div>
        </div>
        <div className='rightDivPersonal'>
            <h2>Start Creating Your Account</h2>
            <div><hr></hr></div>

            <div className='frame-div'>
                <div className='frame-element1'>
                    <img src={one}/>
                    <hr className='short-hr'></hr>
                   
                </div>
                <div className='frame-element2'>
                    <img src={two}/>
                  
                </div>
            </div>

            <div className='h2-div'>

            <h2>Personal Information</h2>

            <h2>Chess Experience</h2>

            </div>

            <div className='h1-div'>
                <h1>Personal Information</h1>
                <h3>This Is Basic Information Fields</h3>
            </div>
            
            <div className='form-div'>
                <form>
                    <Input type="text" placeholder="Name *"/>
                    <Input type="email" placeholder="Email adress *"/>
                    <Input type="tel" placeholder="Phone number *"/>
                    <Input type="text" placeholder="Date of birth *" onFocus={handleFocus} onBlur={handleBlur} />
                </form>
            </div>
            <div className='button-div'>
                <Link style={style} to="/"><button className='back-button'>Back</button></Link>
                <Link style={style} to="/Experience"><button className='next-button'><span>Next</span></button></Link>
            </div>
        </div>
    </div>
  )
}
