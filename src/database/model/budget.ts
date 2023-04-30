import mongoose, { Schema, model, Date } from 'mongoose';

export enum BudgetStatus {
    inactive = "inactive",
    active = 'active',
    completed = 'completed',
}

export type IBudget = {
  userId: mongoose.Schema.Types.ObjectId;
  _id: mongoose.Schema.Types.ObjectId;
  status: BudgetStatus;
}

const BudgetSchema = new Schema<IBudget>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  status: {
    type: String,
    required: true,
    default: BudgetStatus.inactive,
    enum: BudgetStatus,
  },
}, { timestamps: true });

export const BudgetModel = model('budget', BudgetSchema);
