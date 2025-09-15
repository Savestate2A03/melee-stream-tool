import { Server } from '@melee-stream-tool/back-end/app/server';
import { Router, Request, Response } from 'express';

export class Routes {
    private router: Router;
    public constructor() {
        this.router = Router();
        this.buildRoutes();
    }
    private buildRoutes(): void {
        this.router.get('/', (req: Request, res: Response) => {
            const message = {
                msg: `awruf!! ${req.host} :3`,
                time: Date.now().toString()
            };
            res.status(201).json(message);
        });
        this.router.get('/:id', (req: Request, res: Response) => {
            res.status(201).json({
                msg: 'your id is!!!',
                id: req.params.id
            });
        });
    }
    public getRouter(): Router {
        return this.router;
    }
}