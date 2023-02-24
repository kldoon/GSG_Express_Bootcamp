import { Router } from "express";

const router= Router();

router.get('/', (req, res) => {
  res.send('List of comments!');
});

router.get('/:id', (req, res) => {
  res.send('Comments with ID:' + req.params.id);
});

router.post('/', (req, res) => {
  res.send('Comments Created!');
});

router.put('/:id', (req, res) => {
  res.send(`Comments ${req.params.id} Updated!`);
});

router.delete('/:id', (req, res) => {
  res.send(`Comments ${req.params.id} Deleted!`);
});

export default router;
