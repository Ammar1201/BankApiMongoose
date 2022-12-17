import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import Spinner from "./components/utils/Spinner";
import NotFound from "./components/utils/NotFound";
import Users from "./pages/Users";
import Accounts from "./pages/Accounts";
import Transfers from "./pages/Transfers";
import AllUsers from "./components/users/AllUsers";
import SingleUser from "./components/users/SingleUser";
import AddUser from "./components/users/AddUser";
import Message from "./components/utils/Message";
import NewAccount from "./components/accounts/NewAccount";
import UserAccounts from "./components/accounts/UserAccounts";
import Deposit from "./components/accounts/Deposit";
import Withdraw from "./components/accounts/Withdraw";
import UpdateCredit from "./components/accounts/UpdateCredit";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div>
      {isLoading && <Spinner />}
      {message && <Message messageContent={message} setMessage={setMessage} title='' />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users setIsLoading={setIsLoading} />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/user" element={<SingleUser />} />
        <Route path="/adduser" element={<AddUser setMessage={setMessage} />} />
        <Route path="/accounts" element={<Accounts setIsLoading={setIsLoading} />} />
        <Route path="/newaccount" element={<NewAccount setMessage={setMessage} />} />
        <Route path="/useraccounts" element={<UserAccounts setMessage={setMessage} />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/updatecredit" element={<UpdateCredit />} />
        <Route path="/transfers" element={<Transfers setIsLoading={setIsLoading} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;