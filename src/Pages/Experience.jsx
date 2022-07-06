import React, { useEffect, useContext, useState } from 'react'
import Header from '../components/Header'
import one from "../assets/ticked.png"
import two from "../assets/2.png";
import arrowdown from "../assets/arrowdown.svg"
import arrowup from "../assets/arrowup.svg"
import axios from 'axios';
import Input from "../components/Input"
import { Link } from 'react-router-dom';
import { FormContext } from '../components/FormContext';

export default function Experience() {

const {state, setState,values,setValues} = useContext(FormContext);


const onSubmit = () => {

axios.post("https://chess-tournament-api.devtest.ge/api/register",{
  "name": values.name,
  "email": values.email,
  "phone": values.phone,
  "date_of_birth": values.date,
  "experience_level": values.level,
  "already_participated": question,
  "character_id": values.grandmaster
  }).then(res=>console.log(res));
}

const res = () =>{
  axios.get("https://chess-tournament-api.devtest.ge/api/grandmasters")
  .then(data=>setState(data.data))
}

const [question,setQuestion] = useState("");

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

    <div className='dropdown-div'>
      <form className='dropdown-form'>
        <select value={values.level} name="level" onChange={handleChange} onFocus={onFocus} onBlur={onBlur} style={style}>
          <option value="beginner" style={{fontWeight:"bolder"}}>Beginner</option>
          <option value="normal">Intermediate</option>
          <option value="professional">Professional</option>
        </select>
        <select value={values.grandmaster} name="grandmaster" onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
          style={style}>

          {state.map((data, key)=>{
          return (
          
          <option value={data.id} key={key}>{data.name}</option>
          
         
          )
          })}
        </select>

        <div className='radioDiv'>
          <h2>Have you participated in the Redberry Championship? *</h2>
          <div className='radioForm'>

            <Input value={question} type="radio" id="yes" name="question" onChange={(e)=>setQuestion(true)}
            className="radio-input"/>
            <label htmlFor="yes">Yes</label>
            <Input value={question} type="radio" id="no" name="question" onChange={(e)=>setQuestion(false)}
            className="radio-input"/>
            <label htmlFor="no">No</label>
          </div>

        </div>

      </form>
    </div>

    <div className='button-div'>
      <Link style={style} to="/Personal"><button className='back-button-experience'>Back</button></Link>
      <Link style={style} to="/Completed"><button className='next-button-experience'
        onClick={onSubmit}><span>Done</span></button></Link>

    </div>

  </div>
</div>
)
}