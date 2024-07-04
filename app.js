import express, { json, urlencoded } from "express";
import weatherRouter from "./routes/weather.js";
import 'dotenv/config'


const app = express();


app.use(json({ limit: "10mb" }));
app.use(urlencoded({ limit: "10mb", extended: false }));

app.use("/v1/weather", weatherRouter);


export default app;