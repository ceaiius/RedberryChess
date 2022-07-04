import React, { useEffect, useContext } from 'react'
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

const {state, setState, level, setLevel, grandmaster, setGrandmaster, question, setQuestion
, name, email, birth, phone} = useContext(FormContext);



const onSubmit = () => {

axios.post("https://chess-tournament-api.devtest.ge/api/register",{
"name": name,
"email": email,
"phone": phone,
"date_of_birth": birth,
"experience_level": level,
"already_participated": question,
"character_id": grandmaster
}).then(res=>console.log(res));
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
      <hr>
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
        <select value={level} onChange={(e)=>setLevel(e.target.value)} onFocus={onFocus} onBlur={onBlur} style={style}>
          <option  hidden selected>level of knowledge</option>
          <option value="beginner" style={{fontWeight:"bolder"}}>Beginner</option>
          <option value="normal">Intermediate</option>
          <option value="professional">Professional</option>
        </select>
        <select value={grandmaster} onChange={(e)=>setGrandmaster(e.target.value)}  onFocus={onFocus} onBlur={onBlur} style={style}>
         
          {state.map((data, key)=>{
          return (
            
          <option value={data.id}  key={key}>{data.name}</option>
          )
          })}
        </select>

        <div className='radioDiv'>
          <h2>Have you participated in the Redberry Championship? *</h2>
          <div className='radioForm'>

            <Input value={question} type="radio" id="yes" name="question" onChange={()=>{setQuestion(true)}} className="radio-input"/>
            <label htmlFor="yes">Yes</label>
            <Input value={question} type="radio" id="no" name="question" onChange={()=>{setQuestion(false)}} className="radio-input"/>
            <label htmlFor="no">No</label>
          </div>

        </div>

      </form>
    </div>

    <div className='button-div'>
      <Link style={style} to="/Personal"><button className='back-button-experience'>Back</button></Link>
      <Link style={style} to="/Completed"><button className='next-button-experience' onClick={onSubmit}><span>Done</span></button></Link>
      
    </div>

  </div>
</div>
)
}