import Queue from 'bull';
import { config } from "../config/config";

const redisUrl = config.REDIS_URL;

export const budgetQueue = new Queue('budget', redisUrl);

