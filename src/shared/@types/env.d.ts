declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REDIS_URL?: string;
      MONGO_URI?: string;
      NODE_ENV?: string;
      PORT?: string;
    }
  }
}

export {}