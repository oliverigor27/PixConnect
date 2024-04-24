# Mercado Pago PIX Integration App

Este é um aplicativo de integração com o serviço PIX do Mercado Pago, desenvolvido utilizando Express.JS com TypeScript e o SDK do Checkout Pro do Mercado Pago.

## Instalação

Certifique-se de ter o Node.js instalado em sua máquina. Em seguida, clone este repositório e instale as dependências usando npm ou yarn:

```bash
git clone https://github.com/oliverigor27/PixConnect.git
cd PixConnect
npm install
```

## Configuração

Antes de executar o aplicativo, é necessário configurar suas credenciais do Mercado Pago. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```dotenv
ACCESS_TOKEN=SUA_CHAVE_DE_ACESSO_AQUI

IND_KEY=SUA_CHAVE_DE_INDEPOTÊNCIA
```

Substitua `SUA_CHAVE_DE_ACESSO_AQUI` pela sua chave de acesso fornecida pelo Mercado Pago.

## Uso

Para iniciar o servidor, execute o seguinte comando:

```bash
npm run start:dev
```

O servidor será iniciado na porta padrão 3000, a menos que seja especificada uma porta diferente através da variável de ambiente `PORT`.

### Rota de Pagamento

O aplicativo possui uma rota de pagamento acessível através do método POST em `/pagamento`. Esta rota espera os seguintes parâmetros no corpo da requisição:

- `value`: Valor do pagamento.
- `email`: E-mail do destinatário do pagamento.
- `method`: Método de pagamento desejado.
- `description`: Descrição do pagamento.

Exemplo de requisição:

```http
POST /pagamento
Content-Type: application/json

{
  "value": 100.00,
  "email": "exemplo@email.com",
  "method": "PIX",
  "description": "Compra de produto X"
}
```

### Resposta

A API retornará os seguintes dados em caso de sucesso (status HTTP 201):

- `QRCode`: O código QR associado ao pagamento.
- `QRCode_base64`: O código QR codificado em base64.
- `ticket_url`: URL para visualização do comprovante de pagamento.

Exemplo de resposta:

```json
{
  "QRCode": "https://exemplo.com/qrcode",
  "QRCode_base64": "aGVsbG8gd29ybGQ=",
  "ticket_url": "https://exemplo.com/ticket",
  "status": 201
}
```

## Contribuição

Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões de melhorias, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).