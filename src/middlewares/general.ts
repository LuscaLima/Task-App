import { Request, Response } from 'express'

/** This function is executed when the server is in maintenance mode */
export function maintenance(_: Request, res: Response): void {
  res
    .status(503)
    .send('The server is down for maintenance. Please try again later')
}
