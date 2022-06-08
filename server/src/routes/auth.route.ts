import { Router } from 'express';
import { login, signUp, verifyAuthTokken } from '../controllers/auth.controller';

const authRoute = () => {
  const router = Router();

  router.post('/login', login);

  router.post('/verifyAuth', verifyAuthTokken);

  router.post('/register', signUp);

  return router;
};

export { authRoute };
