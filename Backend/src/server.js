import express from 'express';
import { config } from './config/env.js';
import repoRoutes from './routes/repoRoutes.js';

const app = express();

app.use(express.json());

// Mount routes
app.use('/api/repos', repoRoutes);

app.get('/', (req, res) => {
  res.send('Project56 Backend API is running!');
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
