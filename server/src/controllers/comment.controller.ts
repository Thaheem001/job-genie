import { Request, Response } from 'express';
import { CommentDocument, Comment } from '../models/comment.model';

const addComment = async (req: Request, res: Response) => {
  try {
    const commentToAdd: CommentDocument = req.body;

    await Comment.collection.insertOne({ ...commentToAdd, challengeId: 'challenge_1' });

    return res.status(200).json({ message: 'success', data: { commentToAdd } });
  } catch (error) {
    console.log('Error is -->', error);
    return res.status(404).json({ message: 'fail', error });
  }
};
const getCommentsForChallenge = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.find({ challengeId: 'challenge_1' }).exec();

    return res.status(200).json({ message: 'success', data: comments });
  } catch (error) {
    console.log('Error is -->', error);
    return res.status(404).json({ message: 'fail', error });
  }
};

export { addComment, getCommentsForChallenge };
