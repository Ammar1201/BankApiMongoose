import { Link } from "react-router-dom";
import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={classes.notFound}>
      <h1>Page Not Found!</h1>
      <div className={classes.homeLink}>
        <Link to="/">Back To Home</Link>
      </div>
    </div>
  );
}

export default NotFound;