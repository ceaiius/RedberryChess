import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./styles/styles.css"
import Home from './Pages/Home';
import Personal from "./Pages/Personal";
import Experience from "./Pages/Experience";
import Completed from "./Pages/Completed";
import { useState } from "react";
import { FormContext } from "./components/FormContext";
function App() {

  const [name, setInputName] = useState(window.localStorage.getItem('name'));
  const setName = (name) => {
    setInputName(name);
    window.localStorage.setItem('name',name);
  }
  const [email, setInputEmail] = useState(window.localStorage.getItem('email'));
  const setEmail = (email) => {
    setInputEmail(email);
    window.localStorage.setItem('email',email);
  }
  const [phone, setInputPhone] = useState(window.localStorage.getItem('phone'));
  const setPhone = (phone) => {
    setInputPhone(phone);
    window.localStorage.setItem('phone',phone);
  }
  const [birth, setInputBirth] = useState(window.localStorage.getItem('birth'));
  const setBirth = (birth) => {
    setInputBirth(birth);
    window.localStorage.setItem('birth',birth);
  }
  const [level, setInputLevel] = useState(window.localStorage.getItem('level'));
  const setLevel = (level) => {
    setInputLevel(level);
    window.localStorage.setItem('level',level);
  }
  const [grandmaster, setInputGrandmaster] = useState(window.localStorage.getItem('grandmaster'));
  const setGrandmaster = (grandmaster) => {
    setInputGrandmaster(grandmaster);
    window.localStorage.setItem('grandmaster',grandmaster);
  }
  const [question, setInputQuestion] = useState(window.localStorage.getItem('question'));
  const setQuestion = (question) => {
    setInputQuestion(question);
    window.localStorage.setItem('question',question);
  }

  const [state, setState] = useState([]);

  
  return (
    <FormContext.Provider value={{name,setName,email,setEmail,phone,setPhone,birth,setBirth
    ,level,setLevel,grandmaster,setGrandmaster,question,setQuestion, state, setState}}>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Personal' element={<Personal/>}/>
        <Route path='/Experience' element={<Experience/>}/>
        <Route path='/Completed' element={<Completed/>}/>
      </Routes>
    </Router>
    </FormContext.Provider>
  );
}

export default App;
