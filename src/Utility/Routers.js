import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Bollywood, Technology, Hollywood, Fitness, Food } from "../Routes";
import { Error } from "../Components";
import StaticPage from "../Routes/StaticPage";




const Routerrs = () => {
    return(
       
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Bollywood" element={<Bollywood/>}/>
            <Route path="/Bollywood/:id" element={<StaticPage/>}/>

            <Route path="/Technology" element={<Technology/>}/>
            <Route path="/Technology/:id" element={<StaticPage/>}/>

            <Route path='/Hollywood' element={<Hollywood/>}/>
            <Route path="/Hollywood/:id" element={<StaticPage/>}/>

            <Route path='/Fitness' element={<Fitness/>}/>
            <Route path="/Fitness/:id" element={<StaticPage/>}/>

            <Route path='/Food' element={<Food/>}/>
            <Route path="/Food/:id" element={<StaticPage/>}/>

            <Route path='/common' element={<StaticPage/>}/>

            <Route path="*" element={<Error/>}/>
        </Routes>
        
    )
}

export default Routerrs;