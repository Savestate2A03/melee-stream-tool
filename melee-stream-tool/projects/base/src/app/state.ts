export enum Character {
    None,
    DoctorMario,
    Mario,
    Luigi,
    Bowser,
    Peach,
    Yoshi,
    DonkeyKong,
    CaptainFalcon,
    Ganondorf,
    Falco,
    Fox,
    Ness,
    IceClimbers,
    Kirby,
    Samus,
    Zelda,
    Sheik,
    Link,
    YoungLink,
    Pichu,
    Pikachu,
    Jigglypuff,
    Mewtwo,
    MrGameAndWatch,
    Marth,
    Roy
}

export enum TeamColor {
    None,
    Red,
    Blue,
    Green
}

export enum CharacterColor {
    Color0,
    Color1,
    Color2,
    Color3,
    Color4,
    Color5
}

export type Player = {
    tag: string
    pronouns: string
    character: Character
    color: CharacterColor
    score: number
    port: number
};

export type Team = {
    players: Player[]
    teamColor: TeamColor
};

export type Mode = 'singles' | 'teams';

export class GameState {
    private mode: Mode;
    private teams: Team[];
    private player1: Player;
    private player2: Player;
    private player3: Player;
    private player4: Player;
    private inGame: boolean;
    private playerCount: number;

    constructor() {
        this.mode = 'singles';
        this.player1 = GameState.defaultPlayer();
        this.player2 = GameState.defaultPlayer();
        this.player3 = GameState.defaultPlayer();
        this.player4 = GameState.defaultPlayer();
        this.playerCount = 2;
        this.teams = [
            { players: [this.player1, this.player2], teamColor: TeamColor.Red },
            { players: [this.player3, this.player4], teamColor: TeamColor.Blue }
        ];
        this.inGame = false;
    }

    private static defaultPlayer(): Player {
        return {
            tag: '',
            pronouns: '',
            character: Character.None,
            color: CharacterColor.Color0,
            score: 0,
            port: 0
        };
    }
}