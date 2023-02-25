import express from 'express';
import studentController from '../controllers/student.controller.js';
const router = express.Router();

router.post('/', (req, res) => {
  if (!req.body.name) {
    res.status(400).send("Name is Required!");
  } else {
    studentController.create(req, res);
  }
});

router.get('/', studentController.findAll);

export default router;