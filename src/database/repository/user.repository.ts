import { BaseRepository } from './base';
import { UserModel, IUser } from '../model/user';

export const UserRepository = new BaseRepository<IUser>(UserModel);
