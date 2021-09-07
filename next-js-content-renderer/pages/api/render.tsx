import type { NextApiRequest, NextApiResponse } from 'next'
import ReactDOMServer from 'react-dom/server';
import Simple from "../../components/simple";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).send(ReactDOMServer.renderToString(<Simple />))
}

