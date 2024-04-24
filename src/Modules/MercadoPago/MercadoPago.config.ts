import { MercadoPagoConfig, Payment } from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.ACCESS_TOKEN;

const client = new MercadoPagoConfig({
    accessToken: process.env.ACCESS_TOKEN,
    options: {
        timeout: 5000,
        idempotencyKey: process.env.IND_KEY
    }
});

const payment = new Payment(client);