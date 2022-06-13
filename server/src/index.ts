import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import { connectToDatabase } from './databaseConnection';
import { userRoute } from './routes/user.route';
import { authRoute } from './routes/auth.route';
import authenticate from './middlewares/auth';
import { paymentRoute } from './routes/payment.route';
import { githubRepoRoute } from './routes/githubRepo.controller';

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '3001');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/api/', userRoute());
app.use('/api/', authRoute());
app.use('/api/', paymentRoute());
app.use('/api/', githubRepoRoute());

app.get('/api', (req, res) => {
  return res.json({ message: 'Hello Arslan !' });
});

app.get('/api/authorizedOnly', authenticate, (req, res) => {
  return res.json({ message: 'Hello Arslan !' });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
