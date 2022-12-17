import { useState } from 'react';
import { addNewAccountReq } from '../../api/Api';
import ShowAccount from '../utils/ShowAccount';
import classes from './NewAccount.module.css';

const NewAccount = ({ setMessage }) => {
  const [userID, setUserID] = useState('');
  const [account, setAccount] = useState(null);

  const addAccountToUser = async () => {
    if (userID.trim().length < 22) {
      setMessage('user id is invalid!');
      return;
    }

    const addedAccount = await addNewAccountReq(userID);
    if (addedAccount) {
      setAccount(addedAccount);
      // setUserID('');
      // setMessage('new account added successfully!');
    }
    else {
      setMessage('there was an error!');
    }
  };

  const userIDchange = ({ target }) => {
    setUserID(target.value);
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.form}>
          <div>
            <h3>Enter User ID:</h3>
            <input type="text" value={userID} onChange={userIDchange} />
          </div>
          <button onClick={addAccountToUser}>Add Account To User</button>
        </div>
      </div>
      {account && <ShowAccount account={account} />}
    </div>
  )
}

export default NewAccount;