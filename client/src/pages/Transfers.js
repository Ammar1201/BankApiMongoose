import { Link } from 'react-router-dom';
import classes from './Transfers.module.css';

const Transfers = () => {
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <Link to='/alltransfers'>show all transfer</Link>
        </li>
        <li>
          <Link to='/singletransfer'>show single transfer</Link>
        </li>
        <li>
          <Link to='/transfer'>Transfer Money</Link>
        </li>
      </ul>
    </div>
  )
}

export default Transfers;