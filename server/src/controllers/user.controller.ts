import { Request, Response } from 'express';

import { User, UserInput } from '../models/user.model';

const getUserByEmail = async (email: string) => {
  const user = await User.findOne({ email }).exec();

  return user;
};

const createUser = async (req: Request, res: Response) => {
  const { email, fullName } = req.body;

  if (!email || !fullName) {
    return res.status(422).json({ message: 'The fields email, fullName are required' });
  }

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return res.status(409).json({ message: 'This User Already Exists Please Verify Your Payment !', existingUser });
  }

  const userInput: UserInput = {
    fullName,
    email,
  };

  const userCreated = await User.create(userInput);

  return res.status(201).json({ data: userCreated });
};

const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find().populate('role').sort('-createdAt').exec();

  return res.status(200).json({ data: users });
};

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findOne({ _id: id }).exec();

  if (!user) {
    return res.status(404).json({ message: `User with id "${id}" not found.` });
  }

  return res.status(200).json({ data: user });
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { enabled, fullName } = req.body;

  const user = await User.findOne({ _id: id });

  if (!user) {
    return res.status(404).json({ message: `User with id "${id}" not found.` });
  }

  if (!fullName) {
    return res.status(422).json({ message: 'The fields fullName  required' });
  }

  await User.updateOne({ _id: id }, { enabled, fullName });

  const userUpdated = await User.findById(id);

  return res.status(200).json({ data: userUpdated });
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  await User.findByIdAndDelete(id);

  return res.status(200).json({ message: 'User deleted successfully.' });
};

export { createUser, deleteUser, getAllUsers, getUser, updateUser, getUserByEmail };
