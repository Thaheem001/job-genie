import { Router } from 'express';
// import { login, signUp, verifyAuthTokken } from '../controllers/auth.controller';
import { getRepo } from '../controllers/githubRepo.controller';

const githubRepoRoute = () => {
  const router = Router();

  router.get('/repo', getRepo);

  return router;
};

export { githubRepoRoute };
