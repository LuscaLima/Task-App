import { Request, Response } from 'express'
import Task from '../models/Task'
import BaseController from './BaseController'

class TaskController implements BaseController {
  constructor() {}

  public async create(req: Request, res: Response) {
    const task = new Task(req.body)

    try {
      await task.save()
      res.status(201).json(task)
    } catch (e) {
      res.status(400).send(e)
    }
  }

  public async all(_: Request, res: Response) {
    try {
      const tasks = await Task.find({})
      res.json(tasks)
    } catch (e) {
      res.status(500).send()
    }
  }

  public async oneById(req: Request, res: Response) {
    const { id } = req.params

    try {
      const task = await Task.findById(id)

      if (!task) {
        res.status(404).send()
        return
      }

      res.json(task)
    } catch (e) {
      res.status(404).send(e)
    }
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params

    try {
      const task = await Task.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
      })

      if (!task) {
        res.status(404).send()
        return
      }

      res.json(task)
    } catch (e) {
      res.status(400).send()
    }
  }

  isValidUpdate(data: object, keys: Array<string>): boolean {
    const updates = Object.keys(data)

    return updates.every(update => keys.includes(update))
  }
}

export default new TaskController()
