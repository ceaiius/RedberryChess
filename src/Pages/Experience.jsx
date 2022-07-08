import React, { useEffect, useContext, useState } from 'react'
import Header from '../components/Header'
import one from "../assets/ticked.png"
import two from "../assets/2.png";
import arrowdown from "../assets/arrowdown.svg"
import arrowup from "../assets/arrowup.svg"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FormContext } from '../components/FormContext';
import {useForm} from "react-hook-form";
import Card from '../components/Card';
import {useNavigate} from "react-router-dom";
export default function Experience() {

const {state, setState,values,setValues} = useContext(FormContext);
const {register, handleSubmit, formState:{errors}} = useForm();
const navigate = useNavigate();
const [question,setQuestion] = useState("");

const onSubmit = () => {

axios.post("https://chess-tournament-api.devtest.ge/api/register",{
  "name": values.name,
  "email": values.email,
  "phone": values.phone,
  "date_of_birth": values.date,
  "experience_level": values.level,
  "already_participated": true,
  "character_id": values.grandmaster
  }).then(res=>console.log(res));
  navigate("/Completed");
}

const res = () =>{
  axios.get("https://chess-tournament-api.devtest.ge/api/grandmasters")
  .then(data=>setState(data.data))  
}



useEffect(()=>{
  res();
},[])


const style = {
  backgroundImage : `url(${arrowdown})`
}


const onFocus = (e) => {
  e.currentTarget.style.backgroundImage = `url(${arrowup})` ;
}

const onBlur = (e) => {
  e.currentTarget.style.backgroundImage = `url(${arrowdown})` ;
}

const handleChange = (e) => {
  setValues((previousValues) => ({
    ...previousValues,
    [e.target.name]: e.target.value,
  }))
}

useEffect(()=>{
  localStorage.setItem("form", JSON.stringify(values))
},[values])



return (
<div className='container'>
  <div className='leftDivExperience'>
    <Header />
    <div className='img-container-experience'>
      <h1>"MANY HAVE BECOME CHESS MASTERS;" <br></br>NO ONE HAS BECOME THE MASTER OF CHESS."
        <br></br> <span>- SIEGBERT TARRASCH</span></h1>
    </div>
  </div>
  <div className='rightDivExperience'>
    <h2>First step is done, continue to finish onboarding</h2>
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
      <h1>Chess Experience</h1>
      <h3>This Is Basic Information Fields</h3>
    </div>

    <div className='error-div'>
      {errors.level &&
      <Card classname="card1" text="Please choose your level" title="Level" />}
      {errors.grandmaster &&
      <Card classname="card2" text="Please choose your character" title="Character" />}
      {errors.question &&
      <Card classname="card3" text="Please answer the radio question" title="Answer" />}
    </div>

    <div className='dropdown-div'>

      <form className='dropdown-form' onSubmit={handleSubmit(onSubmit)}>

        <select value={values.level} name="level" onFocus={onFocus} onBlur={onBlur} style={style} {...register("level",
          {required:true, onChange:handleChange})}>
          <option value="" hidden>level of knowledge</option>
          <option value="beginner" style={{fontWeight:"bolder"}}>Beginner</option>
          <option value="normal">Intermediate</option>
          <option value="professional">Professional</option>
        </select>


        <select value={values.grandmaster} name="grandmaster" onFocus={onFocus} onBlur={onBlur} style={style}
          {...register("grandmaster", {required:true, onChange:handleChange})}>
          <option value="" hidden>Choose your character</option>
          {state.map((data, key)=>{
          return (
          <option value={data.id} key={key}>{data.name}</option>
          )
          })}
        </select>


        <div className='radioDiv'>
          <h2>Have you participated in the Redberry Championship? *</h2>
          <div className='radioForm'>
            <div className='radio-div'>

              <label htmlFor="yes">
                <input value={question} {...register("question", {required:true, onChange:()=>setQuestion(true)})}
                className="radio-input" type="radio" name="question" id="yes"/>
                <span>Yes</span>
              </label>

              <label htmlFor="no">
                <input value={question} {...register("question", {required:true, onChange:()=>setQuestion(false)})}
                className="radio-input" type="radio" name="question" value="false" id="no"/>
                <span>No</span>
              </label>

            </div>
          </div>

        </div>
        <div className='button-div-experience'>
          <Link style={style} to="/Personal"><button className='back-button-experience'>Back</button></Link>
          <button type='submit' className='next-button-experience'><span>Done</span></button>
        </div>
      </form>
    </div>
  </div>
</div>
)
}