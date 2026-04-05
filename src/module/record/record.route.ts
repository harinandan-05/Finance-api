import express from 'express'
import { authMiddleware } from '../../middleware/auth.middleware'
import { Rolemiddleware } from '../../middleware/role.middleware'

const recordRoute = express.Router()

recordRoute.post('/create',authMiddleware,Rolemiddleware)
recordRoute.post('/')
recordRoute.post('/')
recordRoute.post('/')