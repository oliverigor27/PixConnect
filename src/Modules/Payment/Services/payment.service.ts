import { payment } from "../../MercadoPago/MercadoPago.config";
import { PaymentDto } from "../Dto/payment.dto";
import { PaymentPayload } from "../interface/payment.interface";


export class PaymentService
{
    async CreateNewPayment(data: PaymentDto)
    {
        
        const newPayment = new PaymentDto(
            data.Value,
            data.Description
        )

        const body = {
            transaction_amount: newPayment.Value,
            description: newPayment.Description,
            payment_method_id: "pix",
            payer: {
                email: ""
            },
        };

        const requestOptions = {
            idempotencyKey: process.env.IND_KEY,
        };

        const result = await payment.create({ body, requestOptions });
    
        try {
            return {
                QRCode: result.point_of_interaction?.transaction_data?.qr_code,
                QRCode_base64: result.point_of_interaction?.transaction_data?.qr_code_base64,
                ticket_url: result.point_of_interaction?.transaction_data?.ticket_url
            }
        } catch (error) {
            return error;
        }
    }
}