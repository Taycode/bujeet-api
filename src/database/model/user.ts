import mongoose, { Schema, model } from 'mongoose';

export interface IUser {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
    firstName: string;
    lastName: string;
    passwordHash: string;
}

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true
  },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
  passwordHash: {
    type: String,
    required: true
  },
}, { timestamps: true });

export const UserModel = model('user', UserSchema);
