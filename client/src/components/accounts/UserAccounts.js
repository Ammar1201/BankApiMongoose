import { useState, useEffect } from 'react';
import { Api } from '../../api/Api';
import classes from './UserAccounts.module.css';

const UserAccounts = ({ userID }) => {
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    Api.get(`/users/${userID}/accounts`)
      .then(({ data }) => {
        setAccounts(data);
      })
      .catch((e) => console.log(e));
  }, [userID]);

  return (
    <div className={classes.container}>
      {accounts && accounts.map(account => {
        return (
          <div className={classes.card} key={account._id}>
            <h3>Account Number: {account.accountNumber}</h3>
            <h3>Cash: {account.cash}</h3>
            <h3>Credit: {account.credit}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default UserAccounts;