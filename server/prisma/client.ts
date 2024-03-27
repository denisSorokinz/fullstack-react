import { PrismaClient } from '@prisma/client';

class PrismaClientSingleton {
  private static _instance: PrismaClientSingleton;
  private _prismaClient: PrismaClient;

  private constructor() {
    this._prismaClient = new PrismaClient();
  }

  static getInstance() {
    if (!PrismaClientSingleton._instance) PrismaClientSingleton._instance = new PrismaClientSingleton();

    return PrismaClientSingleton._instance._prismaClient;
  }
}

export default PrismaClientSingleton;
