import {BankService} from "./bank.service";
import {ICustomRequest} from "../../interface/custom-request.interface";
import {Response} from "express";
import {CreateBankDto} from "./dto/create-bank.dto";

export class BankController {
    constructor(private readonly bankService: BankService) {}

    async createBank(req: ICustomRequest, res: Response) {
        const { user } = req;
        const payload: CreateBankDto = req.body;
        const createdBank = await this.bankService.createBank(payload, user);
        return res.status(201).json({
            status: true,
            message: 'Bank created successfully',
            data: createdBank,
        })
    }

    async fetchAllBanks(req: ICustomRequest, res: Response) {
        const { user } = req;
        const banks = await this.bankService.fetchUserBank(user);
        return res.status(200).json({
            status: true,
            message: 'Bank fetched successfully',
            data: banks,
        })
    }
}
