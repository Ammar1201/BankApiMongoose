import { useState } from 'react';
import { withdrawMoneyReq } from '../../api/Api';
import ShowAccount from '../utils/ShowAccount';
import classes from './Withdraw.module.css';

const Withdraw = () => {
  const [account, setAccount] = useState(null);

  const withdrawMoneyHandler = async (event) => {
    event.preventDefault();
    const { userID, accountNumber, amountToWithdraw } = event.target.elements;
    const withdrawReqBody = {
      accountNumber: accountNumber.value,
      amountToWithdraw: amountToWithdraw.value
    }
    const withdrawRes = await withdrawMoneyReq(userID.value, withdrawReqBody);
    setAccount(withdrawRes);
  };

  return (
    <div>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={withdrawMoneyHandler}>
          <div>
            <h3>Enter User ID:</h3>
            <input name='userID' type="text" />
          </div>
          <div>
            <h3>Enter Account Number:</h3>
            <input name='accountNumber' type="text" />
          </div>
          <div>
            <h3>Enter Amount To Withdraw:</h3>
            <input name='amountToWithdraw' type="text" />
          </div>
          <input type="submit" value='Withdraw Money' />
        </form>
        {account && <ShowAccount account={account} />}
      </div>
    </div >
  )
}

export default Withdraw