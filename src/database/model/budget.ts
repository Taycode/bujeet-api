import mongoose, { Schema, model, Date } from 'mongoose';

export enum BudgetStatus {
    inactive = "inactive",
    active = 'active',
    completed = 'completed',
}

export type IBudget = {
  name: string;
  userId: mongoose.Schema.Types.ObjectId;
  _id: mongoose.Schema.Types.ObjectId;
  startDate: Date;
  endDate: Date;
  status: BudgetStatus;
  pocketId: string;
  pocketReference: string;
  bankId: mongoose.Schema.Types.ObjectId;
}

const BudgetSchema = new Schema<IBudget>({
  name: {
    type: String,
    required: true
  },
  pocketId: {
        type: String,
        required: true
    },
  pocketReference: {
        type: String,
        required: true
    },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
    bankId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'bank'
    },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: BudgetStatus.inactive,
    enum: BudgetStatus,
  },
}, { timestamps: true });

export const BudgetModel = model('budget', BudgetSchema);
