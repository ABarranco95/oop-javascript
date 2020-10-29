// // const car = {
// //     make: 'Tesla',
// //     model: 'Model S',
// //     color: 'red',
// // }

// // function start() {
// //     return 'vroom';
// // }

// // function stop() {
// //     return 'Braaaake';
// // }



// const car = {
//     make: 'Tesla',
//     model: 'Model S',
//     color: 'red',
//     start: function() {
//         return 'vroom';
//     },
//     stop: function() {
//         return 'Braaaake';
//     }
// };


// console.log(car.start());

// const employee = {
//     name: 'Angel',
//     age: 25,
//     role: "Software Engineer",
//     salary: 100000,
// }

// function salaryIncrease(salary) {
//     return salary * 1.10
// }

// console.log(salaryIncrease(employee.salary));

// employee.salary = salaryIncrease(employee.salary);
// console.log(employee.salary);




// Constructor Function - function first letter Capitalized

// function Human(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// };

// const angel = new Human('Angel', 'Barranco');
// console.log(angel.firstName);

// const alex = new Human('Alex', 'Greenman');
// console.log(alex.lastName);

// const jon = new Human('Jon', 'Targaryen');
// console.log(jon.lastName);



// Human.prototype.hello = function() {
//     console.log('The force is strong in this one')
// }

// jon.hello();


// function Car(make, model, color, year) {
//     this.make = make;
//     this.model = model;
//     this.color = color;
//     this.year = year;
// };

// const mustang = new Car('Ford', 'Mustang', 'Red', '1966');
// console.log(mustang.model);

// const challenger = new Car('Dodge', 'Challenger', 'Black', '2014')
// console.log(challenger.year);

// const tesla = new Car('Tesla', 'Model S', 'White', '2020')
// console.log(tesla.color);





class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.hello = function() {
            console.log(`My car is a ${mustang.year} ${mustang.make} ${mustang.model} .`);
        };
    }
};

const mustang = new Car('Ford', 'Mustang', '1966');

// console.log(`I am a ${mustang.year} ${mustang.make} ${mustang.model} owner.`);

mustang.hello();