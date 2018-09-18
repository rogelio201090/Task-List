let car = {
    brand: "nissan",
    year: 2011,
    plate: "XYZ-1234",
    state: "NL", 
    isRuning: false,
    startEngine: function() {
        this.isRuning = true;
    },
    stopEngine: function() {
        this.isRuning = false;
    }
};
console.log(car.isRuning);
car.startEngine();
console.log(car.isRuning);
car.stopEngine();
console.log(car.isRuning);