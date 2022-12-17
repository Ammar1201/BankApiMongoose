import { useState } from 'react';
import { getUserAccountsReq } from '../../api/Api';
import ShowUserAccounts from '../utils/ShowUserAccounts';
import classes from './UserAccounts.module.css';

const UserAccounts = ({ setMessage }) => {
  const [userID, setUserID] = useState('');
  const [accounts, setAccounts] = useState(null);

  const addAccountToUser = () => {
    if (userID.trim().length < 22) {
      setMessage('user id is invalid!');
      return;
    }

    const accounts = getUserAccountsReq(userID);
    if (accounts) {
      // setMessage('new account added successfully!');
      setAccounts(accounts);
    }
    else {
      setMessage('there was an error!');
    }
  };

  const userIDchange = ({ target }) => {
    setUserID(target.value);
  };

  return (
    <div>
      <div className={classes.container}>
        <h1>Get All Accounts Of A Specific User</h1>
        <div className={classes.form}>
          <div>
            <h3>Enter User ID:</h3>
            <input type="text" value={userID} onChange={userIDchange} />
          </div>
          <button onClick={addAccountToUser}>Show User Accounts</button>
        </div>
      </div>
      {accounts && <div className={classes.success}>
        <h1>All User Accounts Shown Below!</h1>
        <ShowUserAccounts userID={userID} />
      </div>}
    </div>
  )
}

export default UserAccounts;