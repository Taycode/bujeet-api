import mongoose, { Schema, model } from 'mongoose';

export enum BudgetItemType {
    recurring = 'recurring',
    non_recurring = 'non_recurring',
}

export interface IBudgetItem {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  budgetId: mongoose.Schema.Types.ObjectId;
  type: string;
  amount: number;
  date: Date;
  interval: number;
}


const BudgetItemSchema = new Schema<IBudgetItem>({
  budgetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'budget',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: BudgetItemType
  },
  date: {
    type: Date,
    required: true
  },
    interval: {
      type: Number,
        required: false,
    }

});

export const BudgetItemModel = model('budgetItems', BudgetItemSchema);
