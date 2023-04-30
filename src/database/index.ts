import mongoose from 'mongoose';
import { config } from '../config/config';

export const Database = {
  async connect () {
    try {
      const db = await mongoose.connect(config.MONGO_URI);
      console.log(' -> Database connected');
      return db;
    } catch (error) {
      console.log('-> Error connecting to DB');
      throw error;
    }
  }
};
