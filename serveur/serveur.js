import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

const port = 3000;

import compte_router from './routers/comptes.router.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json());
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use('/',compte_router);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});