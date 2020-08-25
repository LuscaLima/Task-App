import { Router } from 'express'
const router = Router()
import User from '../controllers/UserController'
import { auth } from '../middlewares/auth'
import { uploadAvatar } from '../middlewares/user'

/** Criation route */
router.post('/', User.create)

/** Set up an avatar */
router.post('/me/avatar', auth, uploadAvatar, User.setAvatar)

/** Removing the user's avatar */
router.delete('/me/avatar', auth, User.removeAvatar)

/** Get the avatar of an user */
router.get('/:id/avatar', User.getAvatar)

/** Get the profile of the current user */
router.get('/me', auth, User.me)

/** Update the logged user */
router.put('/me', auth, User.update)

/** Delete the logged user */
router.delete('/me', auth, User.delete)

/** Login route */
router.post('/login', User.login)

/** Logout route */
router.post('/logout', auth, User.logout)

/** Logout in all sessions route */
router.post('/logoutall', auth, User.logoutAll)

export default router
