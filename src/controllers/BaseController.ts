import { Request, Response } from 'express'

interface BaseController {
  /**
   * create
   */
  create(req: Request, res: Response): void

  /**
   * all
   */
  all(req: Request, res: Response): void

  /**
   * getById
   */
  oneById(req: Request, res: Response): void
}

export default BaseController
