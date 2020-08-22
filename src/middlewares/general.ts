import { Request, Response, NextFunction } from 'express'

/** This function is executed when the server is in maintenance mode */
export function maintenance(_: Request, res: Response): void {
  res
    .status(503)
    .send('The server is down for maintenance. Please try again later')
}

/** Handle a router error */
export function errorHandler(
  err: Error,
  _: Request,
  res: Response,
  __: NextFunction
) {
  res.status(400).json({
    error: err.message
  })
}
