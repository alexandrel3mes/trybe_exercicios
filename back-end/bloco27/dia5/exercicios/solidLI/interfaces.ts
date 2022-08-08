// ./interfaces.ts
interface IGroundVehicle {
  drive(): void;
}

interface ISkyVehicle {
  fly(): void;
}

interface IFuturisticVehicle extends IGroundVehicle, ISkyVehicle {}