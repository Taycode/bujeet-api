import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export function signPayload(payload: any) {
    return jwt.sign(payload, config.JWT_SECRET);
}

export function verifyToken(token: string) {
    return jwt.verify(token, config.JWT_SECRET);
}
