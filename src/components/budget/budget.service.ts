import {CreateBudgetDto} from "./dto/create-budget.dto";
import {BudgetItemRepository, BudgetRepository} from "../../database/repository/budget.repository";
import {IUser} from "../../database/model/user";
import {BudgetItemType, IBudgetItem} from "../../database/model/budgetItem";
import {PaystackService} from "../../lib/paystack";
import {BudgetStatus} from "../../database/model/budget";

export class BudgetService {
    constructor(
        private readonly budgetRepository: typeof BudgetRepository,
        private readonly budgetItemRepository: typeof BudgetItemRepository,
        private readonly paystackService: PaystackService,
    ) {}
    async createBudget(payload: CreateBudgetDto, user: IUser) {
        const budget = await this.budgetRepository.create({
            userId: user._id,
            name: payload.name,
            amount: payload.amount
        });
        const budgetItemPayload: Omit<IBudgetItem, '_id'>[] = payload.items.map((_) => {
            return { ..._, budgetId: budget._id }
        })
        const budgetItems = await this.budgetItemRepository.createMany([...budgetItemPayload]);
        return { budget, budgetItems };
    }

    async calculateBudget(budget: CreateBudgetDto) {
        const budgetAmount = budget.amount;
        const dailyExpense = budget.items.filter((_) => _.type === BudgetItemType.recurring);
        const oneTimeExpense = budget.items.filter((_) => _.type === BudgetItemType.recurring);
        let dailyExpenseAmount = dailyExpense.reduce((prev, next) => prev + next.amount, 0)
        dailyExpenseAmount *= 30;
        const oneTimeExpenseAmount = oneTimeExpense.reduce((prev, next) => prev + next.amount, 0)
        const totalAmount = oneTimeExpenseAmount + dailyExpenseAmount;
        const balance = budgetAmount - totalAmount;
        const canProceed = balance >= 0;
        return {
            planName: budget.name,
            expenseItemCount: budget.items.length,
            dailyExpenseItemCount: dailyExpense.length,
            oneTimeExpenseItemCount: oneTimeExpense.length,
            budgetAmount,
            expenses: totalAmount,
            balance,
            canProceed,
        }
    }

    async confirmBudgetPayment(budgetId: string, reference: string) {
        const transaction = await this.paystackService.verifyTransaction(reference);
        if (transaction.data.status === 'success') {
            return this.budgetRepository.findOneAndUpdate({ _id: budgetId }, { status: BudgetStatus.active })
        }
        throw new Error('Payment was not successful');
    }
}
