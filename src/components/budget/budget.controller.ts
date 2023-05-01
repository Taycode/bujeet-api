import {BudgetService} from "./budget.service";
import {Response} from "express";
import {CreateBudgetDto} from "./dto/create-budget.dto";
import {ICustomRequest} from "../../interface/custom-request.interface";
import {PayForBudgetDto} from "./dto/pay-for-budget.dto";

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

    async payForBudget(req: ICustomRequest, res: Response) {
        const { budgetId } = req.params;
        const payload: PayForBudgetDto = req.body;
        const { reference } = payload;
        const updatedBudget = await this.budgetService.confirmBudgetPayment(budgetId, reference);
        if (!updatedBudget) return res.status(400).json({
            status: false,
            message: 'Budget does not exist',
        })
        return res.status(200).json({
            status: true,
            message: 'Budget payment successful',
            data: updatedBudget,
        })
    }
}
