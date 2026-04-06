import express from 'express'
import { authMiddleware } from '../../middleware/auth.middleware'
import { Rolemiddleware } from '../../middleware/role.middleware'
import { getUsersController, updateUserRoleController, } from './user.controller'

const userRouter = express.Router()

userRouter.get(
    '/',
    authMiddleware,
    Rolemiddleware(['admin']),
    getUsersController
)

userRouter.put(
    '/:id/role',
    authMiddleware,
    Rolemiddleware(['admin']),
    updateUserRoleController
)

export default userRouter;
