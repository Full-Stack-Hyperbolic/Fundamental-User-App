import express from 'express';

const router = express.Router();

// This designates what happens when someone visits: `localhost:5000/`
router.get('/', (req, res) => {
  res.send('This works!')  
})

// Export the router for use with app in index.js.
export default router;