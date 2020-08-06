import { Request, Response } from 'express'
import User from '../models/User'

class UserController {
  constructor() {}

  public create(req: Request, res: Response) {
    const user = new User(req.body)

    user
      .save()
      .then(() => {
        res.status(201).json(user)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  public all(_: Request, res: Response) {
    User.find({})
      .then(users => {
        res.json(users)
      })
      .catch(() => {
        res.status(500).send()
      })
  }

  public oneById(req: Request, res: Response) {
    const { id } = req.params

    User.findById(id)
      .then(user => {
        if (!user) {
          return res.status(404).send()
        }

        return res.json(user)
      })
      .catch(err => {
        res.status(404).send(err)
      })
  }
}

export default new UserController()
