export class drawers {
    canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
    ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    boardWidth: number = this.canvas.width = (window.innerWidth < 350 ? 250 : window.innerWidth < 450 ? 350 : window.innerWidth < 500 ? 450 : 500);
    boardHeight: number = this.canvas.height = (window.innerWidth < 350 ? 400 : window.innerWidth < 450 ? 560 : window.innerWidth < 500 ? 720 : 800);
    objectSize: number = (window.innerWidth < 350 ? 25 : window.innerWidth < 450 ? 35 : window.innerWidth < 500 ? 45 : 50);
    half: number = this.objectSize / 2;
    keyImg: HTMLImageElement = new Image();
    lockImg: HTMLImageElement = new Image();
    holeImg: HTMLImageElement = new Image();
    wallImg: HTMLImageElement = new Image();


    constructor() {
        this.keyImg.src = '../src/img/key.png'
        this.lockImg.src = '../src/img/lock.png'
        this.holeImg.src = '../src/img/hole.png'
        this.wallImg.src = '../src/img/brick.png'

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
            this.ctx.drawImage(this.holeImg, x - this.half, y - this.half, this.objectSize, this.objectSize);
        } else {
            this.ctx.drawImage(this.lockImg, x - this.half, y - this.half, this.objectSize, this.objectSize);
        }
    }

    drawWall(x: number, y: number) {
        this.ctx.drawImage(this.wallImg, x, y, this.objectSize, this.objectSize);
    }

    drawKey(x: number, y: number) {
        this.ctx.drawImage(this.keyImg, x - this.half, y - this.half, this.objectSize, this.objectSize);
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