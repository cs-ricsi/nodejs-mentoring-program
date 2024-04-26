import express, { Request, Response, Router } from "express";
import getPostBodyAsync from '../utils/getPostBodyAsync'
import { read, update } from "../service/cart";

const cartController: Router = express.Router();

cartController.get('/cart', async (req: Request, res: Response) => {
    try {
        const data = await read();

        if (data?.data) {
            res.send(data);
        } else {
            res.status(404).send('Cart not found');
        }
    } catch (err) {
        res.status(500).send((err as Error).message);
    }
});

cartController.put('/cart', async (req: Request, res: Response) => {
    try {
        const body = await getPostBodyAsync(req);
        const data = await update(body);

        if (data?.data) {
            res.send(data);
        } else {
            res.status(404).send('Cart not found');
        }
    } catch (err) {
        res.status(500).send((err as Error).message);
    }
});

export default cartController;