import express from 'express';
import { connectDatabase } from './config/database.js';

const app = express();
const PORT = Number(process.env.PORT) || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

app.use(express.json());
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', port: PORT });
});

connectDatabase(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`OctoFit backend listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  });
