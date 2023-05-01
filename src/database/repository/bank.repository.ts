import {BaseRepository} from "./base";
import {BankModel, IBank} from "../model/bank";

export const BankRepository = new BaseRepository<IBank>(BankModel);
