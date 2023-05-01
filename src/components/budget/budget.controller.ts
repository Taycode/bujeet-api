import {BudgetService} from "./budget.service";
import {Response} from "express";
import {CreateBudgetDto} from "./dto/create-budget.dto";
import {ICustomRequest} from "../../interface/custom-request.interface";

export class BudgetController {
    constructor(private readonly budgetService: BudgetService) {}

    async createBudget(req: ICustomRequest, res: Response) {
        const payload: CreateBudgetDto = req.body;
        const { user } = req;
        const response = await this.budgetService.createBudget(payload, user);
        return res.status(201).json({
            status: true,
            message: 'Budget created successfully',
            data: response,
        })
    }

    async calculateBudget(req: ICustomRequest, res: Response) {
        const payload: CreateBudgetDto = req.body;
        const response = await this.budgetService.calculateBudget(payload);
        return res.status(200).json({
            status: true,
            message: 'Budget calculated successfully',
            data: response,
        })
    }
}
