let car = {
    brand: "nissan",
    year: 2011,
    plate: "XYZ-1234",
    state: "NL", 
    isClean: false,
    startEngine: function() {
        this.isClean = true;
    },
    cleaner: function() {
        this.isClean = true;
    },
    changeplate: function() { 
        newplate = prompt("Escriba una nueva placa");
        if (newplate != this.plate){
            this.plate = newplate; 
            alert(`Numero de placa actualizado a: ${this.plate}`);
        }
        else{
            alert(`El numero de la placa escrito es el anterior`) 
        }
    }


};
console.log(car.isClean);
car.startEngine();
console.log(car.isClean);
car.cleaner();
console.log(car.isClean);
car.changeplate();
