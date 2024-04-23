using Microsoft.AspNetCore.Mvc;

namespace MercadoPago.Controller;

[ApiController]
[Route("[controller]")]
public class GeneratePix : ControllerBase
{
    string Mercadopago_url = "https://api.mercadopago.com";
    string AccessKey = Environment.GetEnvironmentVariable("PUBLIC_KEY");
    string AccessToken = Environment.GetEnvironmentVariable("ACCESS_TOKEN");


    [HttpPost]
    public string GenerateNewPix()
    {
        return "Pix realizado!";
    }
}