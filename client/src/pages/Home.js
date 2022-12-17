import { Link } from 'react-router-dom';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.container}>
      <h1>Welcome To Our Bank</h1>
      <h1>Click A Button From The Header Above Or Down Below To Get Started!</h1>
      <div>
        <Link to='/users'>Users</Link>
      </div>
      <div>
        <Link to='/accounts'>Accounts</Link>
      </div>
      <div>
        <Link to='/transfers'>Transfers</Link>
      </div>
    </div>
  )
}

export default Home;