import { Link } from "react-router-dom";
import classes from './NotFound.module.css';
import img from './urban-404.png';
const NotFound = () => {
    return (
       <>
          <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}}  src={img} alt="Error-404"/>
          <p className={classes.notFound}>Страница не найдена</p>
          <Link to='/ligi' className={classes.notFound}>Ввернуться на главную страницу</Link>
       </>
    )
}

export default NotFound;