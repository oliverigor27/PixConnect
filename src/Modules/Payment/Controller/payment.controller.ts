import { Request, Response } from "express";
import { config } from 'dotenv';
import { payment } from "../../MercadoPago/MercadoPago.config";

config();

export class PaymentController
{
    async createNewPayment(req: Request, res: Response)
    {
        const { value, email, method, description } = req.body;

        const body = {
            transaction_amount: value,
            description: description,
            payment_method_id: method,
            payer: {
                email: email
            },
        };

        const requestOptions = {
            idempotencyKey: process.env.IND_KEY,
        };
        
        await payment.create({ body, requestOptions }).then(e => {
            res.status(201).json(
                {
                    QRCode: e.point_of_interaction?.transaction_data?.qr_code,
                    QRCode_base64: e.point_of_interaction?.transaction_data?.qr_code_base64,
                    ticket_url: e.point_of_interaction?.transaction_data?.ticket_url
                }
            )
        }).catch(console.log);
    }
}