import { drawers } from './drawers';
const canvasDrawers = new drawers();


export class createMaze {
    maze: number[][];
    randPlayablePath: number;
    constructor() {
        this.maze = new Array(16);

        // Loop to create 2D array using 1D array 
        for (let i = 0; i < 16; i++) {
            this.maze[i] = new Array(10);
        }

        // Loop to randomly fill array 
        for (let i = 0; i < this.maze.length; i++) {
            for (let j = 0; j < this.maze[i].length; j++) {
                let randNum: number = Math.random();
                if (randNum < 0.5) {
                    randNum = Math.floor(randNum)
                }
                else {
                    randNum = Math.ceil(randNum)
                }
                this.maze[i][j] = randNum;
            }
        }

        // Avaliable playable paths
        let path1: number[][] = [
            [0, 0, 1, 1, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
        ]

        let path2: number[][] = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
            [1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
            [0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
            [0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 0, 1, 1, 1]
        ]

        let path3: number[][] = [
            [0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
        ]

        let path4: number[][] = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 1, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
        ]

        // Loop to randomly assign playable path
        this.randPlayablePath = Math.floor(Math.random() * 4) + 1;

        for (let i = 0; i < this.maze.length; i++) {
            for (let j = 0; j < this.maze[i].length; j++) {
                switch (this.randPlayablePath) {
                    case 1:
                        if (path1[i][j] == 0) {
                            this.maze[i][j] = 0;
                        }
                        break;
                    case 2:
                        if (path2[i][j] == 0) {
                            this.maze[i][j] = 0;
                        }
                        break;
                    case 3:
                        if (path3[i][j] == 0) {
                            this.maze[i][j] = 0;
                        }
                        break;
                    case 4:
                        if (path4[i][j] == 0) {
                            this.maze[i][j] = 0;
                        }
                        break;
                }
            }
        }
    }

    drawMaze() {
        for (let i = 0; i < this.maze.length; i++) {
            for (let j = 0; j < this.maze[i].length; j++) {
                if (this.maze[i][j] == 1) {
                    canvasDrawers.drawWall(j * canvasDrawers.objectSize, i * canvasDrawers.objectSize);
                }
            }
        }
    }
}

//Emuns holding positions where ball, kwy and hole should be drawn on each playable path
export enum path1ObjPositions {
    ballX = 5 * canvasDrawers.objectSize,
    ballY = 8 * canvasDrawers.objectSize,
    keyX = canvasDrawers.objectSize,
    keyY = canvasDrawers.objectSize,
    holeX = 9 * canvasDrawers.objectSize,
    holeY = 15 * canvasDrawers.objectSize
}

export enum path2ObjPositions {
    ballX = 6 * canvasDrawers.objectSize,
    ballY = 2 * canvasDrawers.objectSize,
    keyX = canvasDrawers.objectSize,
    keyY = 11 * canvasDrawers.objectSize,
    holeX = 7 * canvasDrawers.objectSize,
    holeY = 13 * canvasDrawers.objectSize
}

export enum path3ObjPositions {
    ballX = canvasDrawers.objectSize,
    ballY = canvasDrawers.objectSize,
    keyX = 6 * canvasDrawers.objectSize,
    keyY = 7 * canvasDrawers.objectSize,
    holeX = 3 * canvasDrawers.objectSize,
    holeY = 12 * canvasDrawers.objectSize
}

export enum path4ObjPositions {
    ballX = canvasDrawers.objectSize,
    ballY = 15 * canvasDrawers.objectSize,
    keyX = 8 * canvasDrawers.objectSize,
    keyY = 10 * canvasDrawers.objectSize,
    holeX = 5 * canvasDrawers.objectSize,
    holeY = 2 * canvasDrawers.objectSize
}