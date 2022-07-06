import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./styles/styles.css"
import Home from './Pages/Home';
import Personal from "./Pages/Personal";
import Experience from "./Pages/Experience";
import Completed from "./Pages/Completed";
import { useState } from "react";
import { FormContext } from "./components/FormContext";
function App() {

  const getForm = () => {
    const storedValues = localStorage.getItem("form");
    if(!storedValues) return {
      
      name: "",
      email : "",
      phone: "",
      date: "",
      level: "",
      grandmaster: "",
      question:""
      }
    return JSON.parse(storedValues);
    
  }

  const [values, setValues] = useState(getForm)


  const [state, setState] = useState([]);


return (
<FormContext.Provider value={{values,setValues, state, setState}}>
  <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Personal' element={<Personal />}/>
      <Route path='/Experience' element={<Experience />}/>
      <Route path='/Completed' element={<Completed />}/>
    </Routes>
  </Router>
</FormContext.Provider>
);
}

export default App;