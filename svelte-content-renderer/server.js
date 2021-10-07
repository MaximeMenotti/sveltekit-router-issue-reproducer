import { assetsMiddleware, prerenderedMiddleware, kitMiddleware } from './build/middlewares.js';
import express from 'express';
import cors from 'cors';
import compression from 'compression';

const app = express();

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false;
  }

  return compression.filter(req, res);
};

app.use(cors())
app.use(compression({
  filter: shouldCompress,
  threshold: 0
}))
app.use(assetsMiddleware, prerenderedMiddleware, kitMiddleware);

app.listen(3000, () => {
  console.log('Listening on port 3000 🎉');
});
