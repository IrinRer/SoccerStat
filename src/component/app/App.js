import "./App.css";
import HeaderComponent from "../Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ligi from "../ligi/Ligi";
import LigiItem from "../ligiItem/LigiItem";
import NotFound from "../pageNotFound/NotFound";

function App() {
  return (
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* <Route path="/" element={<Ligi />} /> */}
          <Route path="/ligi" element={<Ligi />} /> 
          <Route path="/ligi/:id" element={<LigiItem/>}/>
          {/* <Route path="/:id" element={<LigiItem />} /> */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
