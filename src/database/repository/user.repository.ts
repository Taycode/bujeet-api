import { BaseRepository } from './base';
import { UserModel } from '../model/user';
import { IUser } from '../model/user';

export const UserRepository = new BaseRepository<IUser>(UserModel);
