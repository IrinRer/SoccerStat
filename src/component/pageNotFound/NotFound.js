import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import classes from "./NotFound.module.css";
import img from "./urban-404.png";

const NotFound = () => {
  const history = useNavigate();

  function handleClick() {
   history(-1);
  }

  return (
    <>
      <img
        style={{
          display: "block",
          width: "250px",
          height: "250px",
          objectFit: "contain",
          margin: "0 auto",
        }}
        src={img}
        alt="Error-404"
      />
      <p className={classes.notFound}>Страница не найдена</p>
      <h2 className={classes.notFound} onClick={handleClick} link='true'>
        Ввернуться назад
      </h2>
    </>
  );
};

export default NotFound;
