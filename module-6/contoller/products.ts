import express, { Request, Response, Router } from "express";
import { readAll, read } from "../service/product";

const productController: Router = express.Router();

productController.get('/products', async (req: Request, res: Response) => {
    try {
        const products = await readAll();
        res.send(products);
    } catch (err) {
        res.status(500).send((err as Error).message);
    }

});

productController.get('/products/:productId', async (req: Request, res: Response) => {
    try {
        const product = await read(req.params.productId);

        if (product) {
            res.send(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (err) {
        res.status(500).send((err as Error).message);
    }
});

export default productController;