import { Response, NextFunction } from 'express';
import { verifyToken } from '../util/jwt.util';
import { IUser } from '../database/model/user';
import { UserRepository } from '../database/repository/user.repository';
import { ICustomRequest } from '../interface/custom-request.interface';

export async function validateToken(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
        let { authorization } = req.headers;
        authorization = authorization as string;
        if (authorization) {
            authorization = authorization.replace('Bearer ', '');
            const decodedToken = verifyToken(authorization) as IUser;
            const { _id } = decodedToken;
            const user = await UserRepository.findOne({ _id }, { passwordHash: 0, __v: 0 });
            if (!user) {
                return res.status(401).json({
                    status: false,
                    message: 'Unauthorized'
                });
            }
            req = req as ICustomRequest;
            req.user = user;
            next();
        } else {
            return res.status(401).json({
                status: false,
                message: 'Unauthorized'
            });
        }
    } catch (err) {
        return res.status(401).json({
            status: false,
            message: 'Unauthorized'
        });
    }
}
