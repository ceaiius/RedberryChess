import React, { useContext, useEffect, useState } from 'react'
import Header from "../components/Header"
import one from "../assets/1.png"
import two from "../assets/2.png"
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import {FormContext} from "../components/FormContext"
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import Card from '../components/Card'
import tick from "../assets/correct.png"
export default function () {

const {setName,setEmail,setPhone,setBirth} = useContext(FormContext)
const [state, setState] = useState(false);
const [correct, setCorrect] = useState(false);


const handleFocus = (e) => {
e.currentTarget.type = "date"
}

const handleBlur = (e) => {
e.currentTarget.type = "text"
}

const style = {
color:"white",
textDecoration : "none"
}

const {register, handleSubmit, formState:{errors}} = useForm();
const navigate = useNavigate();
const handleClick = () => {
if(state === true){
navigate("/Experience")
}
}

const onSubmit = (data) => {

if(data.name.length >= 2 && data.email.includes("redberry.ge")){
setState(true)
setCorrect(true);
}
}


return (
<div className='container'>
    <div className='leftDivPersonal'>
        <Header />
        <div className='img-container-personal'>
            <h1>"WHEN YOU SEE A GOOD MOVE, <br></br>LOOK FOR A BETTER ONE."
                <br></br> <span>-EMANUEL LASKER</span></h1>

        </div>
    </div>
    <div className='rightDivPersonal'>
        <h2>Start Creating Your Account</h2>
        <div>
            <hr className='header-hr'>
            </hr>
        </div>

        <div className='frame-div'>
            <div className='frame-element1'>
                <img src={one} />
                <hr className='short-hr'>
                </hr>

            </div>
            <div className='frame-element2'>
                <img src={two} />

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
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.name &&
                <Card classname="card1" text="Please enter a valid name" title="Name" />}
                {errors.email &&
                <Card classname="card2" text="Please enter a valid email adress" title="Email" />}
                {errors.tel &&
                <Card classname="card3" text="Please enter a valid phone number" title="Phone" />}
                {errors.birth &&
                <Card classname="card4" text="Please enter a valid birth date" title="Date" />}

                <div className='form-div'>
                    <div className='tickDiv'>
                        <input onChange={(e)=>setName(e.target.value)} type="text"
                        placeholder="Name *" {...register("name", {required:true, minLength:2})}/>
                        {correct? <img className='tick' src={tick} /> : null}
                    </div>
                    <div className='tickDiv'>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email adress*"
                        {...register("email", {required:true, pattern:/.+@redberry.ge/})}/>
                        {correct? <img className='tick' src={tick} /> : null}
                    </div>
                    <div className='tickDiv'>
                        <input onChange={(e)=>setPhone(e.target.value)} type="tel" placeholder="Phone number *"
                        {...register("tel", {required:true, pattern:/[0-9]{9}/})}/>
                        {correct? <img className='tick' src={tick} /> : null}
                    </div>
                    <div className='tickDiv'>
                        <input onChange={(e)=>setBirth(e.target.value)} type="text" placeholder="Date of birth *"
                        {...register("birth", {required:true})}
                        onFocus={handleFocus} onBlur={handleBlur} />
                        {correct? <img className='tick' src={tick} /> : null}
                    </div>

                </div>


                <div className='button-div'>
                    <Link style={style} to="/"><button className='back-button'>Back</button></Link>
                    <button type='submit' onClick={handleClick} className='next-button'><span>Next</span></button>
                </div>
            </form>

        </div>

    </div>
</div>
)
}