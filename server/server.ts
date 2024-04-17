import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { config } from "dotenv";
config();

const contactRouter = require("./router/contactRouter");

const app = express();
const port = 8080 || process.env.PORT;

app.use(cors({origin: "*"}));
app.use(bodyParser.json());
app.use(morgan("common"));

app.use("/api/v1", contactRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
