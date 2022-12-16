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
        <Route path="/transfers" element={<Transfers setIsLoading={setIsLoading} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;