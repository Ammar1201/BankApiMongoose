import { useState } from 'react';
import { getSingleTransferReq } from '../../api/Api';
import ShowTransfer from '../utils/ShowTransfer';
import classes from './SingleTransfer.module.css';

const SingleTransfer = () => {
  const [transferID, setTransferID] = useState('');
  const [transfer, setTransfer] = useState(null);

  const getTransferHandler = () => {
    getSingleTransferReq(transferID)
      .then((data) => {
        setTransfer(data);
      })
      .catch((e) => console.log(e));
  };

  const transferIDchange = ({ target }) => {
    setTransferID(target.value);
  };

  return (
    <div className={classes.container}>
      <h1>Single Transfer</h1>
      <div className={classes.form}>
        <div>
          <h3>Enter Transfer ID:</h3>
          <input type="text" value={transferID} onChange={transferIDchange} />
        </div>
        <button onClick={getTransferHandler}>Get Transfer Information</button>
      </div>
      {/* {transfer && <div className={classes.container}>
        <ShowTransfer transfer={transfer} />
      </div>} */}
      {transfer && <ShowTransfer transfer={transfer} />}
    </div>
  )
}

export default SingleTransfer;