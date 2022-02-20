import "./App.css";
import HeaderComponent from "../Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ligi from "../ligi/Ligi";
import LigiItem from "../ligiItem/LigiItem";

function App() {
  return (
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/ligi" element={<Ligi />} />
          <Route path="/ligi/:id" element={<LigiItem />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
