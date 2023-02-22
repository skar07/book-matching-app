import { Request, Response } from "express"

export const notFoundError = (req: Request, res: Response) => {
      res.status(404).send('Requested resource not found')
}