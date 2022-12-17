import React from 'react';
import classes from './ShowAccount.module.css';

const ShowAccount = ({ account }) => {
  return (
    <div className={classes.card}>
      <h3>Account Number: {account.accountNumber}</h3>
      <h3>Cash: {account.cash}</h3>
      <h3>Credit: {account.credit}</h3>
    </div>
  )
}

export default ShowAccount;