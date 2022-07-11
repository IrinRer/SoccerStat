import "./App.css";
import HeaderComponent from "../Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LigiContainer } from "../ligi/Ligi";
import { LigiItemContainer } from "../ligiItem/LigiItem";
import NotFound from "../pageNotFound/NotFound";
import { TeamsContainer } from "../teams/Teams";
import { TeamItemContainer } from "../teamItem/TeamItem";


const routes = [
  {path: '/:id', element: <LigiItemContainer />},
  {path: '/teams', element: <TeamsContainer />},
  {path: '/teams/:id', element: <TeamItemContainer />},
  {path: '*', element: <NotFound />}
]

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <HeaderComponent />
      <Routes>
        <Route index element={<LigiContainer />} />
        {routes.map(({path, element}) => {
         return <Route path={path} element={element} key={path}/>
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
