import axios from 'axios';

let myUrl = 'http://localhost:5000/api';

if (process.env.NODE_ENV === 'production') {
  myUrl = 'api';
}
export const Api = axios.create({
  baseURL: myUrl,
});
