import { users } from "../types/user.entity";
import { Request, Response, NextFunction } from "express";

export async function checkUser(req: Request, res: Response, next: NextFunction) {
    const userId = req.header("x-user-id");

    if (!userId) {
        return res.status(403).send("You must be authorized user");
    }

    const user = users.find((u) => u.id === userId);

    if (!user) {
        return res.status(401).send("User is not authorized");
    }

    req.params.user = user.id;
    next();
}