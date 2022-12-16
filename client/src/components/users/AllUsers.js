import { useEffect, useState } from 'react';
import { Api } from '../../api/Api';
import UserAccounts from '../accounts/UserAccounts';
import classes from './AllUsers.module.css';

const AllUsers = () => {
  const [users, setUsers] = useState(null);
  const [userID, setUserID] = useState(null);
  const [showAccounts, setShowAccounts] = useState(null);

  useEffect(() => {
    Api.get('/users')
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const showUserAccounts = ({ target }) => {
    setUserID(target.id);
    setShowAccounts(true);
  };

  return (
    <div className={classes.container}>
      {users && !showAccounts && users.map(user => {
        return <div className={classes.card} key={user._id}>
          <h3>ID: {user._id}</h3>
          <h3>Name: {user.username}</h3>
          <h3>Accounts: {user.accounts.map(account => { return <span>{account}, </span> })}</h3>
          <button id={user._id} onClick={showUserAccounts}>Show Accounts Information</button>
        </div>
      })}
      {users && showAccounts && <UserAccounts userID={userID} />}
    </div>
  )
}

export default AllUsers;