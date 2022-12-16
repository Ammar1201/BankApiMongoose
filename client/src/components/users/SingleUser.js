import { useState } from 'react';
import { Api } from '../../api/Api';
import UserAccounts from '../accounts/UserAccounts';
import classes from './SingleUser.module.css';

const SingleUser = () => {
  const [userID, setUserID] = useState('');
  const [user, setUser] = useState(null);

  const getUserInformation = () => {
    Api.get(`/users/${userID}`)
      .then(({ data }) => {
        console.log(data);
        setUser(data);
      })
      .catch((e) => console.log(e));
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
        <button onClick={getUserInformation}>Get User Information</button>
      </div>
      {user && <div className={classes.card} key={user._id}>
        <h3>ID: {user._id}</h3>
        <h3>Name: {user.username}</h3>
        <h3>Accounts: {user.accounts.map(account => { return <span>{account}, </span> })}</h3>
      </div>}
      {user && <UserAccounts userID={userID} />}
    </div>
  )
}

export default SingleUser;