import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./styles/styles.css"
import Home from './Pages/Home';
import Personal from "./Pages/Personal";
import Experience from "./Pages/Experience";
import Completed from "./Pages/Completed";
import { useState } from "react";
import { FormContext } from "./components/FormContext";
function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [level, setLevel] = useState("");
  const [grandmaster, setGrandmaster] = useState("");
  const [question , setQuestion] = useState("");
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
