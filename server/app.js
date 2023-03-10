import express from 'express';
import cors from 'cors';
import * as url from 'url';
import path from 'path';
import { indexRouter } from './routes/index.router.js';

const __dirname = url.fileURLToPath(new URL('./', import.meta.url));

export const app = express();

app.use(express.json());
app.use(cors());

const publicPath = path.join(__dirname, 'build');
app.use(express.static(publicPath));

app.use('/api', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});