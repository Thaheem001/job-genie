import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';
import { createUser } from './user.controller';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const tokkenSecret = process.env.JWT_SECRET;

  if (!tokkenSecret) {
    return res.status(404).json({ message: `Something went very wrong!` });
  }

  if (!email || !password) {
    return res.status(404).json({ message: `This form requires both emal and password` });
  }

  const user = await User.findOne({ email }).exec();

  if (!user || !user.enabled) {
    return res.status(404).json({ message: `Invalid Email Or Password` });
  }

  const paswordsMatch = await bcrypt.compare(password, user.password);

  if (paswordsMatch) {
    const token = jwt.sign({ id: user._id, email: user.email }, tokkenSecret, {
      expiresIn: '2h',
    });

    res.setHeader('token', token);

    return res.status(200).json({ token });
  }

  return res.status(404).json({ message: `Invalid Email Or Password` });
};

const signUp = async (req: Request, res: Response) => {
  return await createUser(req, res);
};

export { login, signUp };
