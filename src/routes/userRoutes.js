import {
  updateUser,
  readAllUser,
  readOneUser,
  createUser,
  deleteUser,
} from "../controller/userController.js";
import express from 'express';

const router = express();


// CREATE
router.post('/users', createUser);

// READ all
router.get('/users', readAllUser);

// READ one
router.get('/users/:id', readOneUser);

// UPDATE
router.put('/users/:id', updateUser);

// DELETE
router.delete('/users/:id', deleteUser);


export default router;