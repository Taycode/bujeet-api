import {BankService} from "./bank.service";
import {BankController} from "./bank.controller";
import {BankRepository} from "../../database/repository/bank.repository";

export class BankModule {
    bankService: BankService;
    bankController: BankController;

    constructor() {
        this.bankService = new BankService(BankRepository);
        this.bankController = new BankController(this.bankService);
    }
}

const bankModule = new BankModule();
export const bankService = bankModule.bankService;
