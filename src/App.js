import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./styles/styles.css"
import Animated from "./components/Animated";
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
      }
    return JSON.parse(storedValues);
    
  }

  const [values, setValues] = useState(getForm)


  const [state, setState] = useState([]);


return (
<FormContext.Provider value={{values,setValues, state, setState}}>
  <Router>
    <Animated/>
  </Router>
</FormContext.Provider>
);
}

export default App;