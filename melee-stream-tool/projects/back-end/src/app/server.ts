import express, { Request, Response, Express } from 'express';

export class Server {
    private static server: Server;
    private port: number;
    private express: Express;

    private constructor(port?: number) {
        this.port = port ?? 6969;
        this.express = express();
    }

    public static getServer(port?: number): Server {
        if (!Server.server) {
            Server.server = new Server(port);
        }
        return Server.server;
    }

    public getExpress(): Express {
        return this.express;
    }

    public start(): void {
        this.express.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port}`);
        });
    }
}