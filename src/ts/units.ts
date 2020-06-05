// import { drawers } from './drawers';
// const canvasDrawers = new drawers();


export function getTiltDirection(xTilt: number, yTilt: number) {
    const horizontal = xTilt > 1 ? 1 : xTilt < -1 ? -1 : 0;
    const vertical = yTilt > 1 ? 1 : yTilt < -1 ? -1 : 0;
    return { horizontal, vertical };
}

// export let canvasDimensions = {
//     default: { width: 500, height: 800, objectSize: 50 },
//     screen500: { width: 450, height: 720, objectSize: 45 },
//     screen450: { width: 350, height: 560, objectSize: 35 },
//     screen350: { width: 250, height: 400, objectSize: 25 },
// }

// export function setCanvasDimentions() {
//     if (window.innerWidth < 350) {
//         board = canvasDimensions.screen350
//     } else if (window.innerWidth < 450) {
//         canvasDrawers.board = canvasDimensions.screen450
//     } else if (window.innerWidth < 500) {
//         canvasDrawers.board = canvasDimensions.screen500
//     } else {
//         canvasDrawers.board = canvasDimensions.default
//     }

// }