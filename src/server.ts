import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import http from 'node:http';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json(
        {
            message: "Hello World!"
        }
    )
});

http.createServer(app).listen(3000, () => console.log("Server is running!"));