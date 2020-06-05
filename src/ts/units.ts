export function getTiltDirection(xTilt: number, yTilt: number) {
    const horizontal = xTilt > 1 ? 1 : xTilt < -1 ? -1 : 0;
    const vertical = yTilt > 1 ? 1 : yTilt < -1 ? -1 : 0;
    return { horizontal, vertical };
}

export let canvasDimensions = {
    default: { width: 500, height: 800, objectSize: 50 },
    screen500: { width: 450, height: 720, objectSize: 45 },
    screen450: { width: 350, height: 560, objectSize: 35 },
    screen350: { width: 250, height: 400, objectSize: 25 },
}