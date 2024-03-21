import { IncomingHttpHeaders } from 'http';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
  }
}

declare module 'http' {
    interface IncomingHttpHeaders {
        "Authorization"?: string
    }
}
