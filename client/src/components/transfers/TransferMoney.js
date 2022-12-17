import { useState } from 'react';
import { transferMoneyReq } from '../../api/Api';
import ShowTransfer from '../utils/ShowTransfer';
import classes from './TransferMoney.module.css';

const TransferMoney = ({ setMessage }) => {
  const [transfer, setTransfer] = useState(null);

  const transferMoneyHandler = async (event) => {
    event.preventDefault();
    const { senderUserID, senderUserAccountNumber, receiverUserID, receiverUserAccountNumber, amountToTransfer } = event.target.elements;
    const transferBody = {
      senderUserID: senderUserID.value,
      senderUserAccountNumber: senderUserAccountNumber.value,
      receiverUserID: receiverUserID.value,
      receiverUserAccountNumber: receiverUserAccountNumber.value,
      amountToTransfer: amountToTransfer.value
    }
    const transferInfo = await transferMoneyReq(transferBody);
    if (transferInfo) {
      setTransfer(transferInfo);
    }
    else {
      setMessage('there was an error!');
    }
  };

  return (
    <div className={classes.container}>
      <h1>Transfer Money From One Account To Another</h1>
      <form className={classes.form} onSubmit={transferMoneyHandler}>
        <div className={classes.formGroup}>
          <label>Sender User ID:</label>
          <input name='senderUserID' type="text" />
        </div>
        <div className={classes.formGroup}>
          <label>Sender User Account Number:</label>
          <input name='senderUserAccountNumber' type="text" />
        </div>
        <div className={classes.formGroup}>
          <label>Receiver User ID:</label>
          <input name='receiverUserID' type="text" />
        </div>
        <div className={classes.formGroup}>
          <label>Receiver User Account Number:</label>
          <input name='receiverUserAccountNumber' type="text" />
        </div>
        <div className={classes.formGroup}>
          <label>Amount To Transfer:</label>
          <input name='amountToTransfer' type="text" />
        </div>
        <div>
          <input type="submit" value='Transfer Money' />
        </div>
      </form>
      {transfer && <ShowTransfer transfer={transfer} />}
    </div>
  )
}

export default TransferMoney;