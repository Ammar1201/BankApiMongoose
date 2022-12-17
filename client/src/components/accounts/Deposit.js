import { useState } from 'react';
import { depositMoneyReq } from '../../api/Api';
import ShowAccount from '../utils/ShowAccount';
import classes from './Deposit.module.css';

const Deposit = () => {
  const [account, setAccount] = useState(null);

  const depositMoneyHandler = async (event) => {
    event.preventDefault();
    const { userID, accountNumber, amountToDeposit } = event.target.elements;
    const depositReqBody = {
      accountNumber: accountNumber.value,
      amountToDeposit: amountToDeposit.value
    }
    const depositRes = await depositMoneyReq(userID.value, depositReqBody);
    setAccount(depositRes);
  };

  return (
    <div>
      <div className={classes.container}>
        <h1>Deposit Money To A User Account</h1>
        <form className={classes.form} onSubmit={depositMoneyHandler}>
          <div>
            <h3>Enter User ID:</h3>
            <input name='userID' type="text" />
          </div>
          <div>
            <h3>Enter Account Number:</h3>
            <input name='accountNumber' type="text" />
          </div>
          <div>
            <h3>Enter Amount To Deposit:</h3>
            <input name='amountToDeposit' type="text" />
          </div>
          <input type="submit" value='Deposit Money' />
        </form>
        {account && <div>
          <h1>Deposit Processed Successfully!</h1>
          <ShowAccount account={account} />
        </div>}
      </div>
    </div >
  )
}

export default Deposit;