import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/utils/NotFound";
import Users from "./pages/Users";
import Accounts from "./pages/Accounts";
import Transfers from "./pages/Transfers";
import AllUsers from "./components/users/AllUsers";
import SingleUser from "./components/users/SingleUser";
import AddUser from "./components/users/AddUser";
import NewAccount from "./components/accounts/NewAccount";
import UserAccounts from "./components/accounts/UserAccounts";
import Deposit from "./components/accounts/Deposit";
import Withdraw from "./components/accounts/Withdraw";
import UpdateCredit from "./components/accounts/UpdateCredit";
import AllTransfers from "./components/transfers/AllTransfers";
import SingleTransfer from "./components/transfers/SingleTransfer";
import TransferMoney from "./components/transfers/TransferMoney";

const RoutesComponent = ({ setMessage, setIsLoading }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* --------------------------Users Routes--------------------------------------------- */}
      <Route path="/users" element={<Users setIsLoading={setIsLoading} />} />
      <Route path="/allusers" element={<AllUsers />} />
      <Route path="/user" element={<SingleUser />} />
      <Route path="/adduser" element={<AddUser setMessage={setMessage} />} />
      {/* --------------------------Accounts Routes--------------------------------------------- */}
      <Route path="/accounts" element={<Accounts setIsLoading={setIsLoading} />} />
      <Route path="/newaccount" element={<NewAccount setMessage={setMessage} />} />
      <Route path="/useraccounts" element={<UserAccounts setMessage={setMessage} />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/updatecredit" element={<UpdateCredit />} />
      {/* --------------------------Transfers Routes--------------------------------------------- */}
      <Route path="/transfers" element={<Transfers setIsLoading={setIsLoading} />} />
      <Route path="/alltransfers" element={<AllTransfers />} />
      <Route path="/singletransfer" element={<SingleTransfer />} />
      <Route path="/transfer" element={<TransferMoney setMessage={setMessage} />} />
      {/* --------------------------Not Found--------------------------------------------- */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesComponent;