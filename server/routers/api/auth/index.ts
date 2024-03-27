import { Router } from 'express';
import { validateRequest } from 'zod-express-middleware';
import z from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import PrismaClientSingleton from '../../../prisma/client';
import { AuthJWTPayload, AuthResponse } from '../../../types/http';

const authRouter = Router();

const prisma = PrismaClientSingleton.getInstance();

authRouter.post(
  '/signup',
  validateRequest({
    body: z.object({
      email: z.string().email('Please provide a valid email'),
      password: z.string().min(4, 'Password must be 4+ characters long'),
    }),
  }),
  async (req, res) => {
    const { email, password } = req.body;
    const userExists = !!(await prisma.user.findUnique({ where: { email, password } }));

    if (userExists) res.status(409).send({ success: false, message: 'User already exists' });

    const hashedPassword = bcrypt.hashSync(password, 1);
    const user = await prisma.user.create({ data: { email, password: hashedPassword } });

    const payload: AuthJWTPayload = { id: user.id, email: user.email };
    const accessToken = jwt.sign(payload, process.env['JWT_SECRET']!, { expiresIn: '1m' });
    const refreshToken = jwt.sign(payload, process.env['JWT_SECRET']!, { expiresIn: '30s' });

    res
      .cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' })
      .header('Authorization', `Bearer ${accessToken}`)
      .status(201)
      .send({ success: true, data: { user } } as AuthResponse);
  }
);

authRouter.post('/refreshAccessToken', (req, res) => {
  console.log({ cookies: req.cookies });
  
  const refreshToken = req.cookies['refreshToken'];
  console.log({ refreshToken });

  if (!refreshToken) res.status(401).send({ success: false, message: 'Access denied. No refresh token provided.' } as AuthResponse);

  try {
    const decoded = jwt.verify(refreshToken, process.env['JWT_SECRET']!) as AuthJWTPayload;
    const accessToken = jwt.sign({ id: decoded.id, email: decoded.email }, process.env['JWT_SECRET']!, { expiresIn: '1m' });

    res.header('Authorization', `Bearer ${accessToken}`).sendStatus(200);
  } catch {
    res.status(400).send({ success: false, message: 'Invalid refresh token' } as AuthResponse);
  }
});

export default authRouter;
