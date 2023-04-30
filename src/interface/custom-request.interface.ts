import { IUser } from '../database/model/user';
import { Request } from 'express';

export type ICustomRequest = Request & { user: IUser };
