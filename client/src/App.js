import { useState } from "react";
import Header from './components/Header';
import Spinner from "./components/utils/Spinner";
import Message from "./components/utils/Message";
import RoutesComponent from "./RoutesComponent";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div>
      {isLoading && <Spinner />}
      {message && <Message messageContent={message} setMessage={setMessage} title='' />}
      <Header />
      <RoutesComponent setMessage={setMessage} setIsLoading={setIsLoading} />
    </div>
  );
}

export default App;