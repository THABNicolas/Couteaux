import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const port = 3000;

import compte_router from './routers/comptes.router.js';

const app = express();
app.use(bodyParser.json());
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use('/',compte_router);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});