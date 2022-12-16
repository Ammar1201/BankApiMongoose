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
            <NavLink className={(headerData) => headerData.isActive ? classes.active : ''} to='/users'>Users</NavLink>
          </li>
          <li>
            <NavLink className={(headerData) => headerData.isActive ? classes.active : ''} to='/accounts'>Accounts</NavLink>
          </li>
          <li>
            <NavLink className={(headerData) => headerData.isActive ? classes.active : ''} to='/transfers'>Transfers</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;