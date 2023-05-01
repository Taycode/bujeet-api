import {BudgetModule} from "./budget.module";
import {Router} from "express";
import {validateToken} from "../../middleware/auth.middleware";

const budgetModule = new BudgetModule();
const budgetController = budgetModule.budgetController;

const router: Router = Router();

router.post('/create', validateToken, budgetController.createBudget);
router.post('/calculate', validateToken, budgetController.calculateBudget);
router.post('/pay', validateToken, budgetController.payForBudget);

export const BudgetRouter = router;
