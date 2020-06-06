import { canvasDimensions } from './units';

export class drawers {
    canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
    ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    boardWidth: number;
    boardHeight: number;
    objectSize: number;
    half: number;
    image = {
        key: new Image(),
        lock: new Image(),
        hole: new Image(),
        wall: new Image(),
    }

    constructor() {
        if (window.innerWidth < 350) {
            this.boardWidth = this.canvas.width = canvasDimensions.screen350.width;
            this.boardHeight = this.canvas.height = canvasDimensions.screen350.height;
            this.objectSize = canvasDimensions.screen350.objectSize;
        }
        else if (window.innerWidth < 450) {
            this.boardWidth = this.canvas.width = canvasDimensions.screen450.width;
            this.boardHeight = this.canvas.height = canvasDimensions.screen450.height;
            this.objectSize = canvasDimensions.screen450.objectSize;
        }
        else if (window.innerWidth < 500) {
            this.boardWidth = this.canvas.width = canvasDimensions.screen500.width;
            this.boardHeight = this.canvas.height = canvasDimensions.screen500.height;
            this.objectSize = canvasDimensions.screen500.objectSize;
        }
        else {
            this.boardWidth = this.canvas.width = canvasDimensions.default.width;
            this.boardHeight = this.canvas.height = canvasDimensions.default.height;
            this.objectSize = canvasDimensions.default.objectSize;
        }
        this.half = this.objectSize / 2;

        this.image.key.src = '../src/img/key.png'
        this.image.lock.src = '../src/img/lock.png'
        this.image.hole.src = '../src/img/hole.png'
        this.image.wall.src = '../src/img/brick.png'
    }

    clearBoard() {
        this.ctx.clearRect(0, 0, this.boardWidth, this.boardHeight);
    }

    drawPlayer(x: number, y: number) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.half / 2, 0, 2 * Math.PI);
        this.ctx.fillStyle = "darkred";
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawHole(x: number, y: number, ready: boolean) {
        if (ready) {
            this.ctx.drawImage(this.image.hole, x - this.half, y - this.half, this.objectSize, this.objectSize);
        } else {
            this.ctx.drawImage(this.image.lock, x - this.half, y - this.half, this.objectSize, this.objectSize);
        }
    }

    drawWall(x: number, y: number) {
        this.ctx.drawImage(this.image.wall, x, y, this.objectSize, this.objectSize);
    }

    drawKey(x: number, y: number) {
        this.ctx.drawImage(this.image.key, x - this.half, y - this.half, this.objectSize, this.objectSize);
    }

    canMoveX(x: number) {
        return x >= this.half / 2 && x <= this.boardWidth - this.half / 2;
    }
    canMoveY(y: number) {
        return y >= this.half / 2 && y <= this.boardHeight - this.half / 2;
    }

    isOverlapping(obj1: { x: number, y: number }, obj2: { x: number, y: number }) {
        return (
            Math.abs(obj1.x - obj2.x) < this.objectSize / 2 &&
            Math.abs(obj1.y - obj2.y) < this.objectSize / 2
        );
    }
}