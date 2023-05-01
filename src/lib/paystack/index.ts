import axios from 'axios';
import {config} from "../../config/config";
import {IVerifyTransaction} from "./interface/verify-transaction.interface";
import {CreateRecipientDto} from "./dto/create-recipient.dto";
import {ICreateRecipient} from "./interface/create-recipient.interface";
import {TransferDto} from "./dto/transfer.dto";
import {ITransfer} from "./interface/transfer.interface";

const SECRET_KEY = config.PAYSTACK.SECRET;
const baseURL = config.PAYSTACK.BASE_URL;

const client = axios.create({
    baseURL,
    timeout: 1000,
    headers: {'Authorization': `Bearer ${SECRET_KEY}`}
})

export class PaystackService {
    async verifyTransaction(reference: string) {
        return new Promise<IVerifyTransaction>((resolve, reject) => {
            client.get(`/transaction/verify/${reference}`)
                .then((res) => resolve(res.data))
                .catch((err) => reject(err.response.data));
        })
    }

    async createRecipient(payload: CreateRecipientDto) {
        return new Promise<ICreateRecipient>((resolve, reject) => {
            client.get(`/transferrecipient`)
                .then((res) => resolve(res.data))
                .catch((err) => reject(err.response.data));
        })
    }

    async transfer(payload: TransferDto) {
        return new Promise<ITransfer>((resolve, reject) => {
            client.get(`/transfer`)
                .then((res) => resolve(res.data))
                .catch((err) => reject(err.response.data));
        })
    }
}
