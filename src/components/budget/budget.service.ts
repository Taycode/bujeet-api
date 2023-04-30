import {CreateBudgetDto} from "./dto/create-budget.dto";
import {BudgetRepository} from "../../database/repository/budget.repository";
import {IUser} from "../../database/model/user";

export class BudgetService {
    constructor(private readonly budgetRepository: typeof BudgetRepository) {
    }
    async createBudget(user: IUser) {
        return this.budgetRepository.create({ userId: user._id });
    }
}
