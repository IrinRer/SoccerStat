import "./App.css";
import HeaderComponent from "../Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ligi from "../ligi/Ligi";
import LigiItem from "../ligiItem/LigiItem";
import NotFound from "../pageNotFound/NotFound";
import Teams from "../teams/Teams";
import TeamItem from "../teamItem/TeamItem";

function App() {
  
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Ligi />} />
          <Route path="/:id" element={<LigiItem/>}/>
          <Route path="/teams" element={<Teams/>} /> 
          <Route path="/teams/:id" element={<TeamItem/>} /> 
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
