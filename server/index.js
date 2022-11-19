import express from 'express';
import sequelize from './db/db.js';
import cors from 'cors';
import models from './db/models.js';
import routers from './routers/routers.js';
import * as dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/errorMiddleware.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use('/api', routers);

app.use(errorMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`SERVER HAS BEEN STARTED ON PORT ${PORT}`));
  } catch (e) {
    console.log(e)
  }
}

start();