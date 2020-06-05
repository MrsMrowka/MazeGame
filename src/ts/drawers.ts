import { canvasDimensions } from './units';

export class drawers {
    canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
    ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>this.canvas.getContext("2d");

    boardWidth: number = this.canvas.width = (window.innerWidth < 350 ?
        canvasDimensions.screen350.width : window.innerWidth < 450 ?
            canvasDimensions.screen450.width : window.innerWidth < 500 ?
                canvasDimensions.screen500.width : canvasDimensions.default.width);

    boardHeight: number = this.canvas.height = (window.innerWidth < 350 ?
        canvasDimensions.screen350.height : window.innerWidth < 450 ?
            canvasDimensions.screen450.height : window.innerWidth < 500 ?
                canvasDimensions.screen500.height : canvasDimensions.default.height);

    objectSize: number = (window.innerWidth < 350 ?
        canvasDimensions.screen350.objectSize : window.innerWidth < 450 ?
            canvasDimensions.screen450.objectSize : window.innerWidth < 500 ?
                canvasDimensions.screen450.objectSize : canvasDimensions.default.objectSize);

    half: number = this.objectSize / 2;
    image = {
        key: new Image(),
        lock: new Image(),
        hole: new Image(),
        wall: new Image(),
    }


    constructor() {
        this.image.key.src = '../src/img/key.png'
        this.image.lock.src = '../src/img/lock.png'
        this.image.hole.src = '../src/img/hole.png'
        this.image.wall.src = '../src/img/brick.png'
    }

    clearBoard() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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