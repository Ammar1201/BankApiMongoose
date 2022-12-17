import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Users.module.css';

const Users = () => {
  return (
    <div className={classes.container}>
      <h1>All Operations For Users</h1>
      <div>
        <div>
          <Link to='/allusers'>Show All Users Informations</Link>
        </div>
        <div>
          <Link to='/user'>Show A Specific User Information</Link>
        </div>
        <div>
          <Link to='/adduser'>Add New User</Link>
        </div>
      </div>
    </div>
  )
}

export default Users;