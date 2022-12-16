import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={(headerData) => headerData.isActive ? classes.active : ''} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className={(headerData) => headerData.isActive ? classes.active : ''} to='/shoes'>User</NavLink>
          </li>
          <li>
            <NavLink className={(headerData) => headerData.isActive ? classes.active : ''} to='/shoes/add'>Add User</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;