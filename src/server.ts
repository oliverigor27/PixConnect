import express from 'express';
import dotenv from 'dotenv';
import http from 'node:http';

import { route } from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(route);


http.createServer(app).listen(3000, () => console.log("Server is running!"));