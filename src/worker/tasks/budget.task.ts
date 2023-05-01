import { budgetQueue } from "../queues";
import {Job} from "bull";
import {IBudget} from "../../database/model/budget";

export const budgetTask = () => {
    budgetQueue.process(async (job: Job<IBudget>, done) => {
        // Process each budget payout
        const budget = job.data;
        done();
    });
};
