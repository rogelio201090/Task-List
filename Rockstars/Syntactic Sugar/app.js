// SYNTACTIC SUGAR

//Create a Simple Example 

class Dog { 
    constructor(name, breed, dob) { 
        this.name = name;
        this.breed = breed;
        this.birthday = new Date(dob);
    }
}

const benjie = new Dog ("benjie", "yorkie", "01/Jan/2011");
console.log(benjie);

// A complex class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting() {
        return `Hello there ${this.firstNAme} ${this.lastName}`;

    }
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const epoch = new Date(diff);
        return Math.abs(epoch.getFullYear()-1970);
    }
    getsMarried(newLastName) {
        this.lastName = newLastName;
    }
}


//STATIC METHODS

//Add a static method to person to 
//calculate the difference in years of two givens


static yearsInBetween(date1, date2) {
    const iniDate = new Date(date1);
    const endDate = new Date(date2);
    
    const diff = endDate.getTime() - iniDate.getTime();
    const epoch = new Date(diff);
    return Math.abs(epoch.getUTCFullYear() - 1970);
}

