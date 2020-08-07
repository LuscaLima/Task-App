import { Request, Response } from 'express'
import Task from '../models/Task'
import BaseController from './BaseController'

class TaskController implements BaseController {
  constructor() {}

  public create(req: Request, res: Response) {
    const task = new Task(req.body)

    task
      .save()
      .then(() => {
        res.status(201).json(task)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  public all(_: Request, res: Response) {
    Task.find({})
      .then(tasks => {
        res.status(201).json(tasks)
      })
      .catch(() => {
        res.status(500).send()
      })
  }

  public oneById(req: Request, res: Response) {
    const { id } = req.params

    Task.findById(id)
      .then(Task => {
        if (!Task) {
          return res.status(404).send()
        }

        return res.json(Task)
      })
      .catch(err => {
        res.status(404).send(err)
      })
  }
}

export default new TaskController()
