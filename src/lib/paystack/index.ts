import axios from 'axios';
import {config} from "../../config/config";
import {IVerifyTransaction} from "./interface/verify-transaction.interface";

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
}
