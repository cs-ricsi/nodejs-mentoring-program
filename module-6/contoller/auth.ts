import express, { Request, Response, Router } from "express";
import { register, login } from "../service/auth";

const authController: Router = express.Router();

authController.post('/auth/register', async (req: Request, res: Response) => {
    try {
        const user = await register(req.body);
        res.send(user);
    } catch (err) {
        res.status(500).send((err as Error).message);
    }

});

authController.post('/auth/login', async (req: Request, res: Response) => {
    try {
        const product = await login(req.body);

        if (product) {
            res.send(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (err) {
        res.status(500).send((err as Error).message);
    }
});

export default authController;