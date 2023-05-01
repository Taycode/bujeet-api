import {BankRepository} from "../../database/repository/bank.repository";
import {CreateBankDto} from "./dto/create-bank.dto";
import {IUser} from "../../database/model/user";
import mongoose from "mongoose";

export class BankService {
    constructor(private readonly bankRepository: typeof BankRepository) {}

    async createBank(payload: CreateBankDto, user: IUser) {
        return this.bankRepository.create({ ...payload, userId: user._id });
    }

    async fetchUserBank(user: IUser) {
        return this.bankRepository.findOne({ userId: user._id })
    }

    async fetchUserBankWithUserId(userId: mongoose.Schema.Types.ObjectId) {
        return this.bankRepository.findOne({ userId })
    }
}
