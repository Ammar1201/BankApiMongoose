import React from 'react';
import { useState } from 'react';
import { updateCreditReq } from '../../api/Api';
import ShowAccount from '../utils/ShowAccount';
import classes from './UpdateCredit.module.css';

const UpdateCredit = () => {
  const [account, setAccount] = useState(null);

  const updateCreditHandler = async (event) => {
    event.preventDefault();
    const { userID, accountNumber, newCredit } = event.target.elements;
    const updateCreditReqBody = {
      accountNumber: accountNumber.value,
      newCredit: newCredit.value
    }
    const newCreditRes = await updateCreditReq(userID.value, updateCreditReqBody);
    setAccount(newCreditRes);
  };

  return (
    <div>
      <div className={classes.container}>
        <h1>Update User Account Credit</h1>
        <form className={classes.form} onSubmit={updateCreditHandler}>
          <div>
            <h3>Enter User ID:</h3>
            <input name='userID' type="text" />
          </div>
          <div>
            <h3>Enter Account Number:</h3>
            <input name='accountNumber' type="text" />
          </div>
          <div>
            <h3>Enter New Credit:</h3>
            <input name='newCredit' type="text" />
          </div>
          <input type="submit" value='Update Credit' />
        </form>
        {account && <div>
          <h1>Credit Updated Successfully!</h1>
          <ShowAccount account={account} />
        </div>}
      </div>
    </div >
  )
}

export default UpdateCredit;