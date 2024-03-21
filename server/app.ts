import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
import riaApiRouter from './routers/api/ria';
import authRouter from './routers/api/auth';
dotenv.config();

const PORT = 4001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api', riaApiRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
