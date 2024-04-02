import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

import riaApiRouter from './routers/api/cars';
import authRouter from './routers/api/auth';
import crawlerRouter from './routers/crawler';
import { validateQuery } from './middlewares';

const PORT = 4001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/cars', validateQuery, riaApiRouter);
app.use('/api/auth', authRouter);
app.use('/crawler', crawlerRouter);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
