import {BudgetService} from "./budget.service";
import {BudgetController} from "./budget.controller";
import {BudgetItemRepository, BudgetRepository} from "../../database/repository/budget.repository";
import {PaystackService} from "../../lib/paystack";
import {bankService} from "../bank/bank.module";

export class BudgetModule {
    budgetService: BudgetService;
    budgetController: BudgetController;

    constructor() {
        const paystackService = new PaystackService();
        this.budgetService = new BudgetService(BudgetRepository, BudgetItemRepository, paystackService, bankService);
        this.budgetController = new BudgetController(this.budgetService);
    }
}

const budgetModule = new BudgetModule();
export const budgetController = budgetModule.budgetController;
