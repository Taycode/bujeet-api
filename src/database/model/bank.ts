import mongoose, {model, Schema} from "mongoose";

export type IBank = {
    userId: mongoose.Schema.Types.ObjectId;
    _id: mongoose.Schema.Types.ObjectId;
    accountNumber: string;
    bankCode: string;
    accountName: string;
    bankName: string;
};

const BankSchema = new Schema<IBank>({
    accountNumber: { type: String, required: true },
    bankCode: { type: String, required: true },
    bankName: { type: String, required: true },
    accountName: { type: String, required: true },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
});

export const BankModel = model('bank', BankSchema);
