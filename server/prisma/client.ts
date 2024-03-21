import { PrismaClient } from '@prisma/client';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env['DATABASE_URL']}`;

class PrismaClientSingleton {
  private static _instance: PrismaClientSingleton;
  private _prismaClient: PrismaClient;

  private constructor() {
    console.log({env: process.env['DATABASE_URL']});
    
    const pool = new Pool({ connectionString });
    const adapter = new PrismaNeon(pool);
    this._prismaClient = new PrismaClient({ adapter });
  }

  static getInstance() {
    if (!PrismaClientSingleton._instance) PrismaClientSingleton._instance = new PrismaClientSingleton();

    return PrismaClientSingleton._instance._prismaClient;
  }
}

export default PrismaClientSingleton;
