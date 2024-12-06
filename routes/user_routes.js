import express from 'express'
import {
   getAllUser,
   getUserById,
   addUser,
   updateUser,
   deleteUser
} from '../controller/user_controller.js'

import {authorize} from '../controller/auth_controller.js'
import {IsAdmin,} from '../middleware/role_validation.js'

const app = express()
app.get('/getAllUser', getAllUser)
app.get('/getUserById/:id', getUserById)
app.post('/addUser', addUser)
app.put('/updateUser/:id', authorize, [IsAdmin], updateUser)
app.delete('/deleteUser/:id', authorize, [IsAdmin], deleteUser)

export default app