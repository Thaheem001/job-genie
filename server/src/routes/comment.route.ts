import { Router } from 'express';
import { addComment, getCommentsForChallenge } from '../controllers/comment.controller';

const commentRoute = () => {
  const router = Router();

  router.get('/getChallengeComments', getCommentsForChallenge);
  router.post('/addComment', addComment);

  return router;
};

export { commentRoute };
