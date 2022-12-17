import { useEffect, useState } from 'react';
import { getAllUsersReq } from '../../api/Api';
import ShowUserAccounts from '../utils/ShowUserAccounts';
import classes from './AllUsers.module.css';

const AllUsers = () => {
  const [users, setUsers] = useState(null);
  const [userID, setUserID] = useState(null);
  const [showAccounts, setShowAccounts] = useState(null);

  useEffect(() => {
    getAllUsersReq()
      .then((data) => {
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
          <h3>Accounts: {user.accounts.map(account => { return <span key={account}>{account}, </span> })}</h3>
          <button id={user._id} onClick={showUserAccounts}>Show Accounts Information</button>
        </div>
      })}
      {users && showAccounts && <ShowUserAccounts userID={userID} />}
    </div>
  )
}

export default AllUsers;