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

    if (process.env.AUTH_COOKIE) {
      res.setHeader(process.env.AUTH_COOKIE, token);
      res.cookie(process.env.AUTH_COOKIE, token);
    }

    return res.status(200).json({ token });
  }

  return res.status(404).json({ message: `Invalid Email Or Password` });
};

const signUp = async (req: Request, res: Response) => {
  return await createUser(req, res);
};

const verifyAuthTokken = async (req: Request, res: Response) => {
  try {
    const tokkenSecret = process.env.JWT_SECRET;

    if (!tokkenSecret) {
      return res.status(404).json({ message: `Something went very wrong!` });
    }

    const { authTokken } = req.body;

    if (!authTokken) {
      return res.status(409).json({ error: 'Invalid tokken' });
    }

    const verifiedTokken: any = jwt.verify(authTokken, tokkenSecret);

    if (!verifiedTokken?.email) {
      return res.status(409).json({ error: 'Tokken is Malformed!' });
    }

    const user = await User.findOne({ email: verifiedTokken.email }).exec();

    if (!user || !user.enabled) {
      return res.status(404).json({ error: 'User not found!' });
    }

    if (!verifiedTokken?.exp || !verifiedTokken?.iat) {
      return res.status(409).json({ error: 'Tokken is not valid!' });
    }

    console.log("-->",verifiedTokken)

    const exp = new Date(verifiedTokken?.exp * 1000);
    const now = new Date();

    if (now > exp) {
      return res.status(409).json({ error: 'Tokken Expired !' });
    }

    return res.status(200).json({ message: 'Tokken Verified' });
  } catch (error: any) {
    return res.status(409).json({ error: error.message });
  }
};

export { login, signUp, verifyAuthTokken };
