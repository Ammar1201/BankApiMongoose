import { Link } from 'react-router-dom';
import classes from './Accounts.module.css';

const Accounts = () => {
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <Link to='/newaccount'>add new account to user</Link>
        </li>
        <li>
          <Link to='/useraccounts'>get user accounts</Link>
        </li>
        <li>
          <Link to='/deposit'>deposit</Link>
        </li>
        <li>
          <Link to='/withdraw'>withdraw</Link>
        </li>
        <li>
          <Link to='/updatecredit'>update credit</Link>
        </li>
      </ul>
    </div>
  )
}

export default Accounts