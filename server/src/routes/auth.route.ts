import { Router } from 'express';
import { login, signUp } from '../controllers/auth.controller';

const authRoute = () => {
  const router = Router();

  router.post('/login', login);

  router.post('/register', signUp);

  return router;
};

export { authRoute };
