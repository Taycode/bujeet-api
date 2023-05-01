import {BudgetService} from "./budget.service";
import {BudgetController} from "./budget.controller";
import {BudgetItemRepository, BudgetRepository} from "../../database/repository/budget.repository";
import {PaystackService} from "../../lib/paystack";

export class BudgetModule {
    budgetService: BudgetService;
    budgetController: BudgetController;

    constructor() {
        const paystackService = new PaystackService();
        this.budgetService = new BudgetService(BudgetRepository, BudgetItemRepository, paystackService);
        this.budgetController = new BudgetController(this.budgetService);
    }
}
