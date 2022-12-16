import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Users.module.css';

const Users = () => {
  return (
    <div className={classes.container}>
      {/* get user - get all users - add user */}
      <ul>
        <li>
          <Link to='/allusers'>get all users</Link>
        </li>
        <li>
          <Link to='/user'>get user</Link>
        </li>
        <li>
          <Link to='/adduser'>add user</Link>
        </li>
      </ul>
    </div>
  )
}

export default Users;