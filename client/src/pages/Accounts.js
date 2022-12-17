import { Link } from 'react-router-dom';
import classes from './Accounts.module.css';

const Accounts = () => {
  return (
    <div className={classes.container}>
      <h1>All Operations For Accounts</h1>
      <div>
        <div>
          <Link to='/newaccount'>Add New Account To User</Link>
        </div>
        <div>
          <Link to='/useraccounts'>Get All User's Accounts</Link>
        </div>
        <div>
          <Link to='/deposit'>Deposit Money</Link>
        </div>
        <div>
          <Link to='/withdraw'>Withdraw Money</Link>
        </div>
        <div>
          <Link to='/updatecredit'>Update Credit</Link>
        </div>
      </div>
    </div>
  )
}

export default Accounts