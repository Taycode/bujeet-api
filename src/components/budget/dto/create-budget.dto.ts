import {BudgetItemType} from "../../../database/model/budgetItem";

export type CreateBudgetItemDto = {
    name: string;
    amount: number;
    type: BudgetItemType;
    date: Date;
}

export type CreateBudgetDto = {
    name: string;
    amount: number;
    items: CreateBudgetItemDto[]
}
