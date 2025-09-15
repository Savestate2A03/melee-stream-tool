import { Example } from '@melee-stream-tool/base';
import { Server } from '@melee-stream-tool/back-end/app/server';
import { Routes } from '@melee-stream-tool/back-end/app/routes';

function test(): void {
    console.log('back-end');
    new Example();
}

function init(): void {
    test();
    const server = Server.getServer();
    const routes = new Routes();
    routes.routes();
    server.start();
}

init();