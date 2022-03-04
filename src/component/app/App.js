import "./App.css";
import HeaderComponent from "../Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LigiContainer } from "../ligi/Ligi";
import { LigiItemContainer } from "../ligiItem/LigiItem";
import NotFound from "../pageNotFound/NotFound";
import { TeamsContainer } from "../teams/Teams";
import { TeamItemContainer } from "../teamItem/TeamItem";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<LigiContainer />} />
        <Route path="/:id" element={<LigiItemContainer />} />
        <Route path="/teams" element={<TeamsContainer />} />
        <Route path="/teams/:id" element={<TeamItemContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
