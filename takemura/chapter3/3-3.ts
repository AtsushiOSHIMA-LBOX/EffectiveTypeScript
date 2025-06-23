interface Coordinate {
    x: number;
    y: number;
}

interface BoundingBox {
    x: [number, number];
    y: [number, number];
}

interface Polygon {
    exterior: Coordinate[];
    holes: Coordinate[][];
    bbox?: BoundingBox;
}

function isPointInPolygon(point: Coordinate, polygon: Polygon): boolean {
    const box = polygon.bbox;
    if (point.x < box.x[0] || point.x > box.x[1] || point.y < box.y[0] || point.y > box.y[1]) { // NG
        return false;
    }
    if (box) {
        if (point.x < box.x[0] || point.x > box.x[1] || point.y < box.y[0] || point.y > box.y[1]) { // OK
            return false;
        }
    }
    const { bbox } = polygon;
    if (polygon.bbox) {
        if (point.x < bbox.x[0] || point.x > bbox.x[1] || point.y < bbox.y[0] || point.y > bbox.y[1]) { // NG
            return false;
        }
    }

    if (polygon.bbox) {
        const { bbox } = polygon;
        if (point.x < bbox.x[0] || point.x > bbox.x[1] || point.y < bbox.y[0] || point.y > bbox.y[1]) { // OK
            return false;
        }
    }
}