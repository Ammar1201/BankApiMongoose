import { useEffect, useState } from 'react';
import { getAllTransfersReq } from '../../api/Api';
import ShowTransfer from '../utils/ShowTransfer';
import classes from './AllTransfers.module.css';

const AllTransfers = () => {
  const [transfers, setTransfers] = useState(null);

  useEffect(() => {
    getAllTransfersReq()
      .then((data) => {
        setTransfers(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className={classes.transfers}>
      <h1>All Transfers</h1>
      <div className={classes.container}>
        {transfers && transfers.map((transfer) => {
          return (
            <ShowTransfer transfer={transfer} />
          )
        })}
      </div>
    </div>
  )
}

export default AllTransfers;