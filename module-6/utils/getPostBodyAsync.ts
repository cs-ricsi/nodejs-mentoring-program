import { IncomingMessage } from "http";

export default (req: IncomingMessage): Promise<any> => {
    return new Promise((resolve, reject) => {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                body = body ? JSON.parse(body) : {};

                resolve(body);
            } catch (error) {
                reject(error);
            }
        });
    });
};
