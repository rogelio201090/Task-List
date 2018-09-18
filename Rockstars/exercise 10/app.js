//let robert = {
//    firstName: "robert"
//};

//console.log(roberto);

//function Person(name, apellido, dob) {
    //this.firstName = name;
    //this.lastName = apellido;
    //this.birthday = new Date(dob);
    //this.calculateAge = function() {
    //    const diff = Date.now() - this.birthday.getTime();
    //    const ageDate = new Date(diff);
    //    return ageDate.getUTCFullYear() - 1978;
    //};
//};

//const getSum1 = function(x, y ) {
//    return x + y;
//};

//const getSum2 = new Function("x", "y", "return x + y");

//console.log(`getSum1(1,3) = ${getSum1(1,1)}`);
//console.log(`getSum2(1,3) = ${getSum2(1,1)}`);

//const albert1 = {firstName: "albert"};
//const albert2 = new Object({name: "albert"});

//console.log(albert1);
//console.log(albert2);

//const array1 = [1, 2, 3, 4];
//const array2 = new Array(1, 2, 3, 4);

//console.log(array1);
//console.log(array2);

//function Person(firstName, lastName, dob) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.birthday = new Date(dob);
//}

//Person.prototype.calculateAge = function() {
//    const diff = Date.now() - this.birthday.getDate();
//    const epoch = new Date(diff);
//    return Math.abs(epoch.getUTCFullYear() - 1970);
//};



//robert = new Person("roberto", "Montelongo", "01/20/1978");

//const juan = new Person("juan");
//const jose = new Person("jose");


function Mammal(order, family, genus, species) {
    this.order = order;
    this.family = family;
    this.genus = genus;
    this.species = species;
}

Mammal.prototype.getsFullClassification = function() {
    return `${this.species}.${this.genus}.
            ${this.family}.${this.order}`;
}

function Dog(name,breed,dob) {
    Mammal.call(this,"Carnivora", "Canidae", "Canis", "Canis Lupus");

    this.name = name;
    this.breed = breed;
    this.birthday = new Date(dob);

}

apolo = new Dog("apolo", "boxer", "30/Apr/2016");
console.log(apolo);

Dog.prototype = Object.create(Mammal.prototype);



