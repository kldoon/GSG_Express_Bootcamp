import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('List of articles!');
});

router.get('/:id', (req, res) => {
  res.send('Article with ID:' + req.params.id);
});

router.post('/', (req, res) => {
  res.send('Article Created!');
});

router.put('/:id', (req, res) => {
  res.send(`Article ${req.params.id} Updated!`);
});

router.delete('/:id', (req, res) => {
  res.send(`Article ${req.params.id} Deleted!`);
});

export default router;
