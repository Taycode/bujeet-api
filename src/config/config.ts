import dotenv from 'dotenv';

dotenv.config();

export const config = {
  PORT: process.env.PORT || 4141,
  MONGO_URI: 'mongodb://bujit-db:27017/bujit',
  // MONGO_URI: 'mongodb://127.0.0.1:27017',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  REDIS_URL: process.env.REDIS_URL || 'redis:redis_db:6379',
  SEERBIT: {
      SECRET: process.env.SEERBIT_SECRET as string,
      PUBLIC: process.env.SEERBIT_PUBLIC as string,
      BASE_URL: process.env.SEERBIT_BASE_URL as string,
      BUSINESS_NAME: process.env.SEERBIT_BUSINESS_NAME as string,
  }
};
