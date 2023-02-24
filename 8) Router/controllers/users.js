import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.send('List of users!');
});

router.get('/:id', (req, res) => {
  res.send('User with ID:' + req.params.id);
});

router.post('/', (req, res) => {
  res.send('User Created!');
});

router.put('/:id', (req, res) => {
  res.send(`User ${req.params.id} Updated!`);
});

router.delete('/:id', (req, res) => {
  res.send(`User ${req.params.id} Deleted!`);
});

export default router;
