import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./styles/styles.css"
import Home from './Pages/Home';
import Personal from "./Pages/Personal";
import Experience from "./Pages/Experience";
import Completed from "./Pages/Completed";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Personal' element={<Personal/>}/>
        <Route path='/Experience' element={<Experience/>}/>
        <Route path='/Completed' element={<Completed/>}/>
      </Routes>
    </Router>
  );
}

export default App;
