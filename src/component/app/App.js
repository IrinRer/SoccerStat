import "./App.css";
import HeaderComponent from "../Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ligi from "../ligi/Ligi";
import LigiItem from "../ligiItem/LigiItem";
import NotFound from "../pageNotFound/NotFound";
import Teams from "../teams/Teams";
import TeamItem from "../teamItem/TeamItem";
import { useState } from "react";

function App() {
  
  return (
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Ligi />} />
          {/* <Route path="/ligi" element={<Ligi />} />  */}
          {/* <Route path="/ligi/:id" element={<LigiItem/>}/> */}
          <Route path="/:id" element={<LigiItem/>}/>
          <Route path="/teams" element={<Teams/>} /> 
          <Route path="/teams/:id" element={<TeamItem/>} /> 
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
