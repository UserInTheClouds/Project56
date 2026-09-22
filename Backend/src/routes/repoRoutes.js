import express from 'express';
import { getRepositories } from '../controllers/repoController.js';

const router = express.Router();

// Define API routes here
router.get('/', getRepositories);

export default router;
