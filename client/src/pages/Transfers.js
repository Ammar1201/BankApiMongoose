import { Link } from 'react-router-dom';
import classes from './Transfers.module.css';

const Transfers = () => {
  return (
    <div className={classes.container}>
      <h1>All Operations For Transfers</h1>
      <div>
        <div>
          <Link to='/alltransfers'>Show All Transfers</Link>
        </div>
        <div>
          <Link to='/singletransfer'>Show A Specific Transfer</Link>
        </div>
        <div>
          <Link to='/transfer'>Transfer Money</Link>
        </div>
      </div>
    </div>
  )
}

export default Transfers;