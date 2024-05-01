import { Router } from 'express';
import { validateRequest } from 'zod-express-middleware';
import z from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import PrismaClientSingleton from '../../../prisma/client';
import { AuthJWTPayload, AuthResponse, UserRole } from '../../../types/http';
import { validateAuthRequest } from '../../../middlewares';
import { Prisma } from '@prisma/client';

const authRouter = Router();

const prisma = PrismaClientSingleton.getInstance();

const ACCESS_TOKEN_EXPIRY = '4h';
const REFRESH_TOKEN_EXPIRY = '10h';

authRouter.post('/signup', validateAuthRequest, async (req, res) => {
  const { email, password } = req.body as { email: string; password: string };
  const userExists = !!(await prisma.user.findUnique({ where: { email, password } }));

  if (userExists) return res.status(409).send({ success: false, message: 'User already exists' });

  const hashedPassword = bcrypt.hashSync(password, 1);
  let user;
  let role: UserRole = email.includes('admin') ? 'ADMIN' : 'USER';

  try {
    user = await prisma.user.create({ data: { email, password: hashedPassword, role } });
  } catch (err) {
    return res.status(400).send({ success: false, message: 'Unable to create user' } as AuthResponse);
  }

  const payload: AuthJWTPayload = { id: user.id, email: user.email, role };
  const accessToken = jwt.sign(payload, process.env['JWT_SECRET']!, { expiresIn: ACCESS_TOKEN_EXPIRY });
  const refreshToken = jwt.sign(payload, process.env['JWT_SECRET']!, { expiresIn: REFRESH_TOKEN_EXPIRY });

  return res.status(201).send({ success: true, tokens: { accessToken, refreshToken } } as AuthResponse);
});

authRouter.post('/login', validateAuthRequest, async (req, res) => {
  const { email, password } = req.body as { email: string; password: string };
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return res.status(400).send({ success: false, message: 'User does not exist' } as AuthResponse);

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) return res.status(400).send({ success: false, message: 'Invalid credentials' } as AuthResponse);

  const payload: AuthJWTPayload = { id: user.id, email: user.email, role: user.role };
  const accessToken = jwt.sign(payload, process.env['JWT_SECRET']!, { expiresIn: ACCESS_TOKEN_EXPIRY });
  const refreshToken = jwt.sign(payload, process.env['JWT_SECRET']!, { expiresIn: REFRESH_TOKEN_EXPIRY });

  return res.status(200).send({ success: true, tokens: { accessToken, refreshToken } } as AuthResponse);
});

authRouter.post('/refreshAccessToken', (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) return res.status(401).send({ success: false, message: 'Access denied. No refresh token provided.' } as AuthResponse);

  try {
    const decoded = jwt.verify(refreshToken, process.env['JWT_SECRET']!) as AuthJWTPayload;
    const accessToken = jwt.sign({ id: decoded.id, email: decoded.email, role: decoded.role }, process.env['JWT_SECRET']!, {
      expiresIn: ACCESS_TOKEN_EXPIRY,
    });

    return res.status(200).send({ success: true, tokens: { accessToken, refreshToken } } as AuthResponse);
  } catch {
    return res.status(400).send({ success: false, message: 'Invalid refresh token' } as AuthResponse);
  }
});

export default authRouter;
