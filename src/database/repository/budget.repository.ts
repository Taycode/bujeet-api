import { BaseRepository } from './base';
import { BudgetModel } from '../model/budget';
import { IBudget } from '../model/budget';
import { BudgetItemModel, IBudgetItem } from '../model/budgetItem';

export const BudgetRepository = new BaseRepository<IBudget>(BudgetModel);
export const BudgetItemRepository = new BaseRepository<IBudgetItem>(BudgetItemModel);

