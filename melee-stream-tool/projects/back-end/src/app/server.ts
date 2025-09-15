import express, { Express } from 'express';
import { Routes } from './routes';

export class Server {
    private static server: Server;
    private port: number;
    private express: Express;

    private constructor(routes: Routes, port?: number) {
        this.port = port ?? 6969;
        this.express = express();
        this.express.use(express.json());
        this.express.use('/heartbeat', routes.getRouter());
    }

    public static getServer(routes: Routes, port?: number): Server {
        if (!Server.server) {
            Server.server = new Server(routes, port);
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