import { useState } from 'react';
import { getUserAccountsReq } from '../../requests';
import classes from './UserAccounts.module.css';

const UserAccounts = ({ setMessage }) => {
  const [userID, setUserID] = useState('');

  const addAccountToUser = () => {
    if (userID.trim().length < 22) {
      setMessage('user id is invalid!');
      return;
    }

    const addedAccount = getUserAccountsReq(userID);
    if (addedAccount) {
      setUserID('');
      setMessage('new account added successfully!');
    }
    else {
      setMessage('there was an error!');
    }
  };

  const userIDchange = ({ target }) => {
    setUserID(target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <div>
          <h3>Enter User ID:</h3>
          <input type="text" value={userID} onChange={userIDchange} />
        </div>
        <button onClick={addAccountToUser}>Show User Accounts</button>
      </div>
    </div>
  )
}

export default UserAccounts;