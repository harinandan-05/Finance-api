import express from 'express'
import { authMiddleware } from '../../middleware/auth.middleware'
import { Rolemiddleware } from '../../middleware/role.middleware'
import { deleteRecorController, getRecordbyidController, recordCreateControl, recordGetFilterController, updateRecordController } from './record.controller'

const recordRoute = express.Router()

recordRoute.post('/create',authMiddleware,Rolemiddleware(['admin']),recordCreateControl)
recordRoute.delete('/delete',authMiddleware,Rolemiddleware(["admin"]),deleteRecorController)
recordRoute.get('/records',authMiddleware,Rolemiddleware(['admin','analyst']),recordGetFilterController)
recordRoute.get('/records/:id',authMiddleware,Rolemiddleware(['admin','viewer','analyst']),getRecordbyidController)
recordRoute.put('/update/:id',authMiddleware,Rolemiddleware(['admin']),updateRecordController)