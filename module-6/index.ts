import express, { Express } from "express";
import productController from "./contoller/products";
import authController from "./contoller/auth"
import cartController from "./contoller/cart";
import { checkUser } from "./middleware/auth";


const app: Express = express();

app.use(checkUser);
app.use('/api', authController);
app.use('/api', productController);
app.use('/api/profile', cartController);

app.listen(8000, () => {
    console.log('Server is started');
})