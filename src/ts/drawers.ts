export class drawers {
    canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
    ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    boardWidth: number = this.canvas.width = 500;
    boardHeight: number = this.canvas.height = 800;
    objectSize: number = 50;
    half: number = this.objectSize / 2;

    clearBoard() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawPlayer(x: number, y: number) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.half / 2, 0, 2 * Math.PI);
        this.ctx.fillStyle = "purple";
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawHole(x: number, y: number, ready: boolean) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.half, 0, 2 * Math.PI);
        this.ctx.fillStyle = ready ? "gold" : "red";
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawWall(x: number, y: number) {
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(x, y, this.objectSize, this.objectSize);
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawKey(x: number, y: number) {
        let image = <HTMLCanvasElement>document.getElementById("key");
        this.ctx.drawImage(image, x - this.half, y - this.half, this.objectSize, this.objectSize);
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