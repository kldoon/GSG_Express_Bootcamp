import express from 'express';
import entryController from '../controllers/entry.controller.js';
const router = express.Router();

router.post('/', (req, res) => {
    //fullName height weight status color
    if (!req.body.fullName || !req.body.status || !req.body.color) {
        res.status(400).send("Full Name, Status and Color are Required!");
    } else {
        entryController.create(req, res);
    }
});

router.delete('/:id', entryController.deleteById);
router.get('/', entryController.findAll);

export default router;