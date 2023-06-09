import express, { Express, Request, Response } from "express";
import cors from "cors";
import productsController from "./controllers/products";
import productListController from "./controllers/productlist";
import bodyParser from "body-parser";


const app: Express = express();
app.use(bodyParser.json());
app.use(cors({
    origin: ['http://localhost:3006']
}));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', productsController);
app.use('/', productListController);

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});