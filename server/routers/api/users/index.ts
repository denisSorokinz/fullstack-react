import { Request, Response, Router } from 'express';
import PrismaClientSingleton from '../../../prisma/client';
import { AuthJWTPayload } from '../../../types/http';

const usersRouter = Router();

const prisma = PrismaClientSingleton.getInstance();

usersRouter.get('/favorites', async (req: Request, res: Response) => {
  const { id: userId } = (req as any)['user'] as AuthJWTPayload;

  if (isNaN(userId)) return res.status(400).send('invalid session');

  const existingUser = await prisma.user.findUnique({ where: { id: userId } });
  if (!existingUser) return res.status(404).send('user not found');

  const favorites = await prisma.favoriteListing.findMany({ select: { listingId: true }, where: { userId } });
  const mapped = favorites.map((item) => item.listingId);

  console.log('favorites', mapped);

  return res.status(200).json({ favorites: mapped });
});

usersRouter.put('/favorites/:listingId/toggle', async (req: Request, res: Response) => {
  const { id: userId } = (req as any)['user'] as AuthJWTPayload;
  const listingId = Number(req.params['listingId']);

  if (isNaN(userId) || isNaN(listingId)) return res.sendStatus(400);

  const existingUser = await prisma.user.findUnique({ where: { id: userId } });
  if (!existingUser) return res.status(404).send('user not found');

  const existingListing = await prisma.listing.findUnique({ where: { id: listingId } });
  if (!existingListing) return res.status(404).send('user not found');

  const alreadyFavorited = Boolean(await prisma.favoriteListing.findFirst({ where: { userId, listingId } }));

  if (alreadyFavorited) {
    await prisma.favoriteListing.delete({ where: { favoritedId: { userId, listingId } } });
  } else {
    await prisma.favoriteListing.create({ data: { userId, listingId } });
  }
  const favoriteCount = await prisma.favoriteListing.count({ where: { listingId } });

  return res.status(200).json({ listingId, favoriteCount, isFavorited: !alreadyFavorited });
});

usersRouter.put('/favorites/:listingId', async (req: Request, res: Response) => {
  const { id: userId } = (req as any)['user'] as AuthJWTPayload;
  const listingId = Number(req.params['listingId']);

  if (isNaN(userId) || isNaN(listingId)) return res.sendStatus(400);

  const existingUser = await prisma.user.findUnique({ where: { id: userId } });
  if (!existingUser) return res.status(404).send('user not found');

  const existingListing = await prisma.listing.findUnique({ where: { id: listingId } });
  if (!existingListing) return res.status(404).send('user not found');

  const alreadyFavorited = Boolean(await prisma.favoriteListing.findFirst({ where: { userId, listingId } }));
  if (alreadyFavorited) return res.status(400).send('already favorited');

  await prisma.favoriteListing.create({ data: { userId, listingId } });
  const favoriteCount = await prisma.favoriteListing.count({ where: { listingId } });

  return res.status(200).json({ listingId, favoriteCount });
});

usersRouter.delete('/favorites/:listingId', async (req: Request, res: Response) => {
  const { id: userId } = (req as any)['user'] as AuthJWTPayload;
  const listingId = Number(req.params['listingId']);

  if (isNaN(userId) || isNaN(listingId)) return res.sendStatus(400);

  const existingUser = await prisma.user.findUnique({ where: { id: userId } });
  if (!existingUser) return res.status(404).send('user not found');

  const existingListing = await prisma.listing.findUnique({ where: { id: listingId } });
  if (!existingListing) return res.status(404).send('user not found');

  const favoritedListing = await prisma.favoriteListing.findFirst({ where: { userId, listingId } });
  if (!favoritedListing) return res.status(400).send('listing not favorited');

  await prisma.favoriteListing.delete({ where: { favoritedId: { userId, listingId } } });
  const favoriteCount = await prisma.favoriteListing.count({ where: { listingId } });

  return res.status(200).json({ listingId, favoriteCount });
});

export default usersRouter;
