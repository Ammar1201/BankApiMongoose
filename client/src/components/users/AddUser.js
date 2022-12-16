import React from 'react';
import { addUserReq } from '../../requests';
import classes from './AddUser.module.css';

const AddUser = ({ setMessage }) => {
  const addUser = async (event) => {
    event.preventDefault();
    const { name, password } = event.target.elements;
    const userToAdd = {
      username: name.value,
      password: password.value
    }
    const addedUser = await addUserReq(userToAdd);
    if (addedUser) {
      setMessage('user added successfully!');
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
    </div>
  )
}

export default AddUser;