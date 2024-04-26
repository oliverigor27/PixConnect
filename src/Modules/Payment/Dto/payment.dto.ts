export class PaymentDto
{
    Value: number;
    Description: string;

    constructor(value: number, description: string) {
        this.Value = value;
        this.Description = description;
    }
}