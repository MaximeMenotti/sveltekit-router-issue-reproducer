import { assetsMiddleware, prerenderedMiddleware, kitMiddleware } from './build/middlewares.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(assetsMiddleware, prerenderedMiddleware, kitMiddleware);

app.listen(3000);
