import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {} from 'dotenv/config';

import postRoutes from './routes/posts.js';

const app = express();

// Apply our middleware before brining in our routes
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Reachable on `localhost:5000/posts`
// Use express middleware to bring in our routes route using 'posts' prefix
app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`))
  )
  .catch(error => console.log(error.message));

// ensures no warnings printed to console
mongoose.set('useFindAndModify', false);
