interface IVector1D {
    x: number;
}
interface IVector2D extends IVector1D {
    y: number;
}
interface IVector3D extends IVector2D {
    z: number;
}

type TVector1D = {
    x: number;
}
type TVector2D = TVector1D & {
    y: number;
}
type TVector3D = TVector2D & {
    z: number;
}