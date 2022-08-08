// ./FuturisticCar.ts

export class FuturisticCar implements IFuturisticVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}


export class Car implements IGroundVehicle {
  drive(): void { console.log('Drive a car'); }
}

export class AirPlane implements ISkyVehicle {
  fly(): void { console.log('Flying an airplane'); }
}