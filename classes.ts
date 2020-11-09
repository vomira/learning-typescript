class Vehicle {
    color: string = 'red'; 


    protected honk(): void {
        console.log('beep')
    }
}

const vehicle = new Vehicle();
console.log(vehicle.color);


class Car extends Vehicle {
    drive(): void {
        console.log('vroom')
    }

    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car();

car.startDrivingProcess();
