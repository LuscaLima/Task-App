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

  /** update by id */
  update(req: Request, res: Response): void

  /** is valid update */
  // isValidUpdate(data: object, keys: Array<string>): boolean
}

export default BaseController
