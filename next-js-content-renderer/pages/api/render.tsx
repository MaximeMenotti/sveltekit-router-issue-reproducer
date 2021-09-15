import type { NextApiRequest, NextApiResponse } from 'next'
import ReactDOMServer from 'react-dom/server';
import Simple from "../../components/simple";
import Cors from 'cors'


// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors)

  res.status(200).send(ReactDOMServer.renderToString(<Simple />))
}

export default handler
