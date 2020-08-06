import { Router } from 'express'
const router = Router()
import User from '../controllers/UserController'

/** Criation route */
router.post('/', User.create)

/** Get all users */
router.get('/', User.all)

/** Get one user by ID */
router.get('/:id', User.oneById)

export default router
