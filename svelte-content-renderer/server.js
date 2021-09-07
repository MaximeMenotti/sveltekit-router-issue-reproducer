import compression from 'compression';
import cors from 'cors';
import express from 'express';
/* eslint import/no-unresolved: "off" */
import { handler } from './build/handler.js';

const app = express();

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false;
  }

  return compression.filter(req, res);
};

app.use(cors());
app.use(
  compression({
    filter: shouldCompress,
    threshold: 0
  })
);

app.get('/health', (req, res) => {
  res.end('ok');
});

app.use(handler);

app.listen(3000, () => {
  console.log('Listening on port 3000 🎉');
});