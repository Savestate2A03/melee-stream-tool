import { GameState } from "@melee-stream-tool/base/app/state";

export class StateManager {
    private state: GameState;
    constructor() {
        this.state = new GameState();
    }
}