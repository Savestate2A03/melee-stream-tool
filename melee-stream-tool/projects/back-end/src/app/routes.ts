import { Server } from '@melee-stream-tool/back-end/app/server';
import { Express, Request, Response } from 'express';

export class Routes {
    private express: Express;    
    public constructor() {
        this.express = Server.getServer().getExpress();
    }
    public routes(): void {
        this.express.get('/', (req: Request, res: Response) => {
            res.send(`awruf!! ${req.host} :3`);
        });
    }
}