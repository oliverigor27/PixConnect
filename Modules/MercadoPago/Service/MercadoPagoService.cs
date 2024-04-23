using System;
using System.Threading.Tasks;
using System.Net.Http.Headers;

namespace MarcadoPago.Service;

public class MercadoPagoService
{
    private readonly HttpClient _httpClient;
    private string AccessKey = Environment.GetEnvironmentVariable("PUBLIC_KEY");
    private string AccessToken = Environment.GetEnvironmentVariable("ACCESS_TOKEN");
    public MercadoPagoService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task CreatePixPayment(decimal amount, string description, string email)
    {
        string jsonBody = @"
            {
                ""transaction_amount"": " + amount.ToString() + @",
                ""description"": """ + description + @""",
                ""payment_method_id"": ""pix"",
                ""payer"": {
                    ""email"": """ + email + @"""
                }
            }
        ";
        
        string endpoint = "https://api.mercadopago.com/v1/payments";

        _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", AccessToken);
    }
}