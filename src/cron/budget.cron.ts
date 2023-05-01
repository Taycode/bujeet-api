import cron from 'node-cron';
import { budgetQueue } from '../worker/queues';
import {BudgetRepository} from "../database/repository/budget.repository";
import {BudgetStatus} from "../database/model/budget";


const PayBudget = () => {
    cron.schedule('5 * * * * *', async() => {
        // Fetch Budget
        console.log('Fetching budgets');
        const budgets = await BudgetRepository.find({ status: BudgetStatus.active });
        console.log('done fetching, now adding budgets to queue');
        budgets.forEach(budget => budgetQueue.add(budget));
    });
};

export const BudgetCron = () => {
    // PayBudget();
};
