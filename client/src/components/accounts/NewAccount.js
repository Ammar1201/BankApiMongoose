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
        <h1>Add A New Account To Existing User</h1>
        <div className={classes.form}>
          <div>
            <h3>Enter User ID:</h3>
            <input type="text" value={userID} onChange={userIDchange} />
          </div>
          <button onClick={addAccountToUser}>Add New Account</button>
        </div>
        {account && <div>
          <h1>Account Added Successfully!</h1>
          <ShowAccount account={account} />
        </div>}
      </div>
    </div>
  )
}

export default NewAccount;