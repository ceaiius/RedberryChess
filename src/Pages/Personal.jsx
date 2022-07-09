import React, { useContext, useEffect, useState } from 'react';
import Header from "../components/Header";
import one from "../assets/1.png";
import two from "../assets/2.png";
import { Link } from 'react-router-dom';
import {FormContext} from "../components/FormContext";
import { useForm } from 'react-hook-form';
import Card from "../components/Card";
import tick from "../assets/correct.png";
import {useNavigate} from "react-router-dom";

export default function () {

const {values,setValues} = useContext(FormContext);
const [state, setState] = useState(false);
const [correct, setCorrect] = useState(false);
const {register, handleSubmit, formState:{errors}} = useForm();
const navigate = useNavigate();


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

const errorStyle = {
    backgroundColor: "#FFEFEF",
    color: "#DC3545"
}

const handleClick = () => {
    if(state === true){
        navigate("/Experience");
    }
}

const onSubmit = (data) => {
    if(data.name.length >= 2 && data.email.includes("redberry.ge")){
        setState(true);
        setCorrect(true);
    }
}

const handleChange = (e) => {
    setValues((previousValues) => ({
        ...previousValues,
        [e.target.name]: e.target.value,
    }))
}

useEffect(()=>{
    localStorage.setItem("form", JSON.stringify(values));
},[values])


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
                {errors.phone &&
                <Card classname="card3" text="Please enter a valid phone number" title="Phone" />}
                {errors.date &&
                <Card classname="card4" text="Please enter a valid birth date" title="Date" />}
                <div className='form-div'>


                    <div className='tickDiv'>
                        <input style={{backgroundColor: errors["name"] ? "#FFEFEF" : null, color: errors["name"] ? "#DC3545" : null}}  value={values.name} name="name" type="text" placeholder="Name *"
                            {...register("name",{onChange:handleChange, required:true, minLength:2})} />
                        {correct? <img className='tick' src={tick} /> : null}
                    </div>

                    <div className='tickDiv'>
                        <input style={{backgroundColor: errors["email"] ? "#FFEFEF" : null, color: errors["email"] ? "#DC3545" : null}} value={values.email} name="email" type="email" placeholder="Email adress
                        *" {...register("email",{onChange:handleChange, required:true, pattern:/.+@redberry.ge/})}/>
                            {correct? <img className='tick' src={tick} /> : null}
                    </div>

                    <div className='tickDiv'>
                        <input style={{backgroundColor: errors["phone"] ? "#FFEFEF" : null, color: errors["phone"] ? "#DC3545" : null}} value={values.phone} name="phone" type="tel" placeholder="Phone number *"
                            {...register("phone",{onChange:handleChange, required:true, pattern:/[0-9]{9}/})}/>
                            {correct? <img className='tick' src={tick} /> : null}
                    </div>

                    <div className='tickDiv'>
                        <input style={{backgroundColor: errors["date"] ? "#FFEFEF" : null, color: errors["date"] ? "#DC3545" : null}} value={values.date} name="date" type="text" placeholder="Date of birth *"
                            onFocus={handleFocus} onBlur={handleBlur} {...register("date",{onChange:handleChange,
                            required:true})} />
                        {correct? <img className='tick' src={tick} /> : null}
                    </div>


                </div>
                <div className='button-div-personal'>
                    <Link  to="/"><button className='back-button'>Back</button></Link>
                    <button type='submit' onClick={handleClick} className='next-button'><span>Next</span></button>
                </div>
            </form>
        </div>

    </div>
</div>
)
}