import { useState } from 'react';
import { addUserReq } from '../../api/Api';
import classes from './AddUser.module.css';

const AddUser = ({ setMessage }) => {
  const [user, setUser] = useState(null);

  const addUser = async (event) => {
    event.preventDefault();
    const { name, password } = event.target.elements;
    const userToAdd = {
      username: name.value,
      password: password.value
    }
    const addedUser = await addUserReq(userToAdd);
    if (addedUser) {
      setUser(addedUser);
    }
    else {
      setMessage('there was an error!');
    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={addUser}>
        <div className={classes.formGroup}>
          <label>Name:</label>
          <input name='name' type="text" />
        </div>
        <div className={classes.formGroup}>
          <label>password:</label>
          <input name='password' type="password" />
        </div>
        <div>
          <input type="submit" value='add user' />
        </div>
      </form>
      {user && <div className={classes.card} key={user._id}>
        <h3>ID: {user._id}</h3>
        <h3>Name: {user.username}</h3>
        <h3>Accounts: {user.accounts.map(account => { return <span key={account}>{account}, </span> })}</h3>
      </div>}
    </div>
  )
}

export default AddUser;