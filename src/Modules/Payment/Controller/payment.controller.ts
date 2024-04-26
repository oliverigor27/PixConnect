import { Request, Response } from "express";
import { PaymentService } from "../Services/payment.service";
import { config } from 'dotenv';

config();

export class PaymentController
{
    async createNewPayment(req: Request, res: Response)
    {
        const paymentService = new PaymentService();

        const result = await paymentService.CreateNewPayment(req.body);

        if(result)
        {
            res.status(200).json(result);
        }
    }
}