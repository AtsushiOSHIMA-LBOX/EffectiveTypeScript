// interface Vector2D {
//     x: number;
//     y: number;
// }

// interface Vector3D {
//     x: number;
//     y: number;
//     z: number;
// }

// function calculateLength(v: Vector2D|Vector3D): number {
//     let norm = 0;
//     for(const [, value] of Object.entries(v)) {
//         norm += value * value;
//     }
//     return Math.sqrt(norm);
// }

// function normalize(v: Vector2D|Vector3D): Vector2D|Vector3D {
//     const length = calculateLength(v);
//     let ret = {};
//     for(const [key, value] of Object.entries(v)) {
//         ret[key] = value / length;
//     }
//     return ret;
// }

// GPT提案手法
interface Vector2D {
    x: number;
    y: number;
}

interface Vector3D {
    x: number;
    y: number;
    z: number;
}

function calculateLength<T extends Record<string, number>>(v: T): number {
    let norm = 0;
    for (const value of Object.values(v)) {
        norm += value * value;
    }
    return Math.sqrt(norm);
}

function normalize<T extends Record<string, number>>(v: T): T {
    const length = calculateLength(v);
    const ret = {} as T;
    // for (const key in v) {
    //     if (Object.prototype.hasOwnProperty.call(v, key)) {
    //         ret[key] = v[key] / length;
    //     }
    // }
    for (const [key, value] of Object.entries(v)) {
        ret[key] = value / length;
    }
    return ret;
}