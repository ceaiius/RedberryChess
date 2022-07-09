import React from 'react'
import {useLocation,Routes, Route,} from "react-router-dom";
import Home from "../Pages/Home"
import Personal from "../Pages/Personal"
import Experience from "../Pages/Experience"
import Completed from "../Pages/Completed"
import {AnimatePresence} from "framer-motion"


function Animated() {
const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />}/>
            <Route path='/Personal' element={<Personal />}/>
            <Route path='/Experience' element={<Experience />}/>
            <Route path='/Completed' element={<Completed />}/>
        </Routes>
    </AnimatePresence>
  )
}

export default Animated