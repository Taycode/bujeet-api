import dotenv from 'dotenv';

dotenv.config();

export const config = {
  PORT: process.env.PORT || 4141,
  // MONGO_URI: 'mongodb://bujit-db:27017/bujit',
  MONGO_URI: 'mongodb://127.0.0.1:27017/bujit',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  REDIS_URL: process.env.REDIS_URL || 'redis:redis_db:6379',
  PAYSTACK: {
      SECRET: process.env.PAYSTACK_SECRET as string,
      PUBLIC: process.env.PAYSTACK_PUBLIC as string,
      BASE_URL: process.env.PAYSTACK_BASE_URL as string,
  }
};
