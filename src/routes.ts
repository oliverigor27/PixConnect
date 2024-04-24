import { Router } from "express";
import { PaymentController } from "./Modules/Payment/Controller/payment.controller";

const route = Router();

const paymentController = new PaymentController();

route.post("/new-payment", paymentController.createNewPayment);

export {  route };