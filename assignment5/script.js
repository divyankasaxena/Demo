function greetUser(name, callback) {
    console.log("Hello" + name);
    callback();
}

function showEndMessage() {
    console.log("Welcome !!!");
}


greetUser("XYZ", showEndMessage);

//--------------------------------------------------------------------------------------------------------------------------------




// question 2

function applyOperation(numbers, operation) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }
    return result;
}

let doubled = applyOperation([1,2,3], function(num) {
    return num * 2;
});
console.log("Doubled:", doubled);

let squared = applyOperation([1,2,3], function(num) {
    return num * num;
});
console.log("Squared:", squared);

//--------------------------------------------------------------------------------------------------------------------------------




// question 3


let user = {
    name: "ABC",
    showName: () => {
        console.log("Name:", this.name); // undefined
    }
};
user.showName();

// CORRECT 
let userFixed = {
    name: "ABC",
    showName: function() {
        console.log("Name:", this.name); 
    }
};
userFixed.showName();

//--------------------------------------------------------------------------------------------------------------------------------




// question 4

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(this.brand + " - " + this.model);
};

let car1 = new Car("HFHJKJ", "ABC");
let car2 = new Car("FIWJ", "KLM");

car1.getDetails();
car2.getDetails();

//--------------------------------------------------------------------------------------------------------------------------------




// question 5

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
    console.log("Branch:", this.branch);
};

let student1 = new Student("DEF", "CS");
student1.showName();
student1.showBranch();

//--------------------------------------------------------------------------------------------------------------------------------


