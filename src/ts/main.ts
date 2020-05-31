import '../scss/styles.scss';

import { getTiltDirection } from './units';
import { drawers } from './drawers';
import { createMaze } from './maze';

const canvasDrawers = new drawers();
let handleMaze = new createMaze();

let currentXTilt: number = 0;
let currentYTilt: number = 0;

let hint: HTMLDivElement = <HTMLDivElement>document.querySelector("#showHint")
let popUPtab: HTMLDivElement = <HTMLDivElement>document.querySelector('.popUpTab')
let title: HTMLDivElement = <HTMLDivElement>document.querySelector('.title');
let personalTime: HTMLDivElement = <HTMLDivElement>document.querySelector('.yourTime');
const restartGame: HTMLDivElement = <HTMLDivElement>document.querySelector('.restartBtn');

restartGame.onclick = () => {
    hint.innerHTML = "Hint: get the key";
    popUPtab.style.display = "none";
    handleMaze = new createMaze();
    const game = new Game();
}

window.addEventListener("deviceorientation", handleOrientationChange, true);

function handleOrientationChange(e: any) {
    let y: number = e.beta; // In degree in the range [-180,180] Front Back
    let x: number = e.gamma; // In degree in the range [-90,90] Left Right
    if (y > 90) {
        y = 90;
    }
    if (y < -90) {
        y = -90;
    }
    if (y !== null && x !== null) {
        currentXTilt = x;
        currentYTilt = y;
    }
}

class GameObject {
    name: string;
    x: number;
    y: number;
    constructor(name: string, x = 0, y = 0) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
}

class Ball extends GameObject {
    velocity: { vertical: number, horizontal: number };
    constructor(x = 0, y = 0) {
        super("Ball", x, y); // Calls game object constructor
        this.velocity = { vertical: 0, horizontal: 0 };
    }
}

class Game {
    startTime: number;
    keyObtained: boolean;
    ball: Ball;
    key: GameObject;
    hole: GameObject;
    gameLoop: number;

    constructor() {
        this.startTime = new Date().getTime();
        this.keyObtained = false;
        // Randomly assing playable path
        switch (handleMaze.pathRand) {
            case 1:
                this.randGameObjPosition(5 * canvasDrawers.objectSize, 8 * canvasDrawers.objectSize, canvasDrawers.objectSize, canvasDrawers.objectSize, 9 * canvasDrawers.objectSize, 15 * canvasDrawers.objectSize);
                break;
            case 2:
                this.randGameObjPosition(6 * canvasDrawers.objectSize, 2 * canvasDrawers.objectSize, canvasDrawers.objectSize, 11 * canvasDrawers.objectSize, 7 * canvasDrawers.objectSize, 13 * canvasDrawers.objectSize)
                break;
            case 3:
                this.randGameObjPosition(canvasDrawers.objectSize, canvasDrawers.objectSize, 6 * canvasDrawers.objectSize, 7 * canvasDrawers.objectSize, 3 * canvasDrawers.objectSize, 12 * canvasDrawers.objectSize)
                break;
            case 4:
                this.randGameObjPosition(canvasDrawers.objectSize, 15 * canvasDrawers.objectSize, 8 * canvasDrawers.objectSize, 10 * canvasDrawers.objectSize, 5 * canvasDrawers.objectSize, 2 * canvasDrawers.objectSize)
                break;
        }
        this.gameLoop = setInterval(() => this.render(), 100);
    }

    randGameObjPosition(ballX: number, ballY: number, keyX: number, keyY: number, holeX: number, holeY: number) {
        // Randomly assign position of ball key and hole
        switch (Math.floor(Math.random() * 6) + 1) {
            case 1:
                this.ball = new Ball(ballX, ballY);
                this.key = new GameObject(
                    "Key", keyX, keyY
                );
                this.hole = new GameObject(
                    "Hole", holeX, holeY
                );
                break;
            case 2:
                this.ball = new Ball(ballX, ballY);
                this.key = new GameObject(
                    "Key", holeX, holeY
                );
                this.hole = new GameObject(
                    "Hole", keyX, keyY
                );
                break;
            case 3:
                this.ball = new Ball(keyX, keyY);
                this.key = new GameObject(
                    "Key", ballX, ballY
                );
                this.hole = new GameObject(
                    "Hole", holeX, holeY
                );
                break;
            case 4:
                this.ball = new Ball(holeX, holeY);
                this.key = new GameObject(
                    "Key", ballX, ballY
                );
                this.hole = new GameObject(
                    "Hole", keyX, keyY
                );
                break;
            case 5:
                this.ball = new Ball(keyX, keyY);
                this.key = new GameObject(
                    "Key", holeX, holeY
                );
                this.hole = new GameObject(
                    "Hole", ballX, ballY
                );
                break;
            case 6:
                this.ball = new Ball(holeX, holeY);
                this.key = new GameObject(
                    "Key", keyX, keyY
                );
                this.hole = new GameObject(
                    "Hole", ballX, ballY
                );
                break;

        }
    }

    calculateBallVelocity() {
        const velocity = getTiltDirection(currentXTilt, currentYTilt);
        this.ball.velocity.horizontal += velocity.horizontal;
        this.ball.velocity.vertical += velocity.vertical;
    }

    movePlayer() {
        let futureX: number;
        let futureY: number;

        // Controlls ball velocity
        if (this.ball.velocity.horizontal > -10 && this.ball.velocity.horizontal < 10) {
            futureX = this.ball.x + this.ball.velocity.horizontal / 4;
        } else if (this.ball.velocity.horizontal < -20 && this.ball.velocity.horizontal > 20) {
            futureX = this.ball.x + this.ball.velocity.horizontal / 2;
        } else {
            futureX = this.ball.x + this.ball.velocity.horizontal / 3;
        }

        if (this.ball.velocity.vertical > -10 && this.ball.velocity.vertical < 10) {
            futureY = this.ball.y + this.ball.velocity.vertical / 4;
        } else if (this.ball.velocity.vertical < -18 && this.ball.velocity.vertical > 18) {
            futureY = this.ball.y + this.ball.velocity.vertical / 2;
        } else {
            futureY = this.ball.y + this.ball.velocity.vertical / 3;
        }

        // Can move inside canvas
        if (canvasDrawers.canMoveX(futureX) && canvasDrawers.canMoveY(futureY)) {
            this.ball.x = futureX;
            this.ball.y = futureY;
        } else if (canvasDrawers.canMoveX(futureX)) {
            this.ball.x = futureX;
            this.ball.velocity.vertical = 0;
        } else if (canvasDrawers.canMoveY(futureY)) {
            this.ball.y = futureY;
            this.ball.velocity.horizontal = 0;
        } else {
            this.ball.velocity.vertical = 0;
            this.ball.velocity.horizontal = 0;
        }
    }
    overlapsKey() {
        if (canvasDrawers.isOverlapping(this.ball, this.key)) {
            this.keyObtained = true;
            hint.innerHTML = "Head towards the exit";
        }
    }

    checkVictoryCondidtions() {
        const endTime: number = new Date(this.startTime).getTime();
        const now: number = new Date().getTime();

        if (
            canvasDrawers.isOverlapping(this.ball, this.hole) &&
            this.keyObtained
        ) {
            clearInterval(this.gameLoop);
            popUPtab.style.display = "block"
            title.innerHTML = "You won!";
            personalTime.innerHTML = "Your Time was: " + Math.abs((endTime - now) / 1000).toFixed(1) + "s";
        }
    }

    checkGameOverCondidtions() {
        let mazeX: number = Math.floor((this.ball.x + this.ball.velocity.horizontal) / canvasDrawers.objectSize);
        let mazeY: number = Math.floor((this.ball.y + this.ball.velocity.vertical) / canvasDrawers.objectSize);

        // Check if ball is in wall
        if (this.ball.velocity.horizontal > -10 && this.ball.velocity.horizontal < 10) {
            mazeX = Math.floor((this.ball.x + (canvasDrawers.half / 10 * this.ball.velocity.horizontal)) / canvasDrawers.objectSize);
        }
        else if (this.ball.velocity.horizontal < -20 && this.ball.velocity.horizontal > 20) {
            mazeX = Math.floor((this.ball.x + (this.ball.velocity.horizontal / 4)) / canvasDrawers.objectSize);
        }

        if (this.ball.velocity.vertical > -10 && this.ball.velocity.vertical < 10) {
            mazeY = Math.floor((this.ball.y + (canvasDrawers.half / 10 * this.ball.velocity.vertical)) / canvasDrawers.objectSize);
        }
        else if (this.ball.velocity.vertical < -20 && this.ball.velocity.vertical > 20) {
            mazeY = Math.floor((this.ball.y + (this.ball.velocity.vertical / 4)) / canvasDrawers.objectSize);
        }

        if (handleMaze.maze[mazeY][mazeX] === 1) {
            clearInterval(this.gameLoop);
            popUPtab.style.display = "block"
            title.innerHTML = "Game Over!";
        }
    }

    writeTime() {
        const endTime: number = new Date(this.startTime).getTime() + 200 * 1000;
        const now: number = new Date().getTime();

        if (endTime - now > 0) {
            let timer: HTMLElement = <HTMLElement>document.querySelector("#showTimer");
            timer.innerHTML = "Remaining time: " + ((endTime - now) / 1000).toFixed(1) + "s";
        } else {
            clearInterval(this.gameLoop);
            popUPtab.style.display = "block"
            title.innerHTML = "Game Over!";
        }
    }

    render() {
        canvasDrawers.clearBoard();
        this.writeTime();
        this.calculateBallVelocity();
        this.movePlayer();
        this.overlapsKey();
        canvasDrawers.drawPlayer(this.ball.x, this.ball.y);
        if (!this.keyObtained) canvasDrawers.drawKey(this.key.x, this.key.y);
        canvasDrawers.drawHole(this.hole.x, this.hole.y, this.keyObtained);
        handleMaze.drawMaze();
        this.checkVictoryCondidtions();
        this.checkGameOverCondidtions();
    }
}

const game = new Game();