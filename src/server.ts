import 'reflect-metadata';
import 'express-async-errors';

import '@shared/container';

import express from 'express';
import router from 'routes';

import { catchError } from '@middlewares/catchError';
import { DatabaseConfiguration } from './database';

DatabaseConfiguration.startConnection();

const app = express();

app.use(express.json());

app.use(router);

app.use(catchError);

app.listen(3333, () => console.log('Server is running on port 3333!'));
