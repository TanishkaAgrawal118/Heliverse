import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { configureDB } from './src/Configs/DbConfig.js';
import router from './src/Routers/Router.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(process.env.PORT, () => {
    configureDB();
    console.log(`listening on port ${process.env.PORT}`);
})