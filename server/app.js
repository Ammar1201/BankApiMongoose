import express from 'express';
import { indexRouter } from './routes/index.router.js';

export const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', indexRouter);

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});