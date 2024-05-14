import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Slot from './Components/Slot';
import SlotReg from './Components/SlotReg';
import Login from './Components/Admin/Login';
import Centers from './Components/Admin/Centers';
import Update from './Components/Admin/Update';
import Add from './Components/Admin/Add';

const App = () => {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/slot" element={<Slot/>} /> 
        <Route path="/SlotReg" element={<SlotReg/>} />
        <Route path="*" element={<Home/>} />
  
        <Route path="/Login" element={<Login />}/>
        <Route path="/Centers" element={<Centers />}/>
        <Route path="/Update/:id" element={<Update />}/>
        <Route path ="/Add" element={<Add />}/>
      </Routes>
    </BrowserRouter>
  
}

export default App
