'use strict';

//Constructor

function Car(cName, cYear){
    this.name = cName;
    this.year = cYear;
    this.getCarInfo = function(){
        document.write('Model: ' + this.name + ' Year: ' + this.year + '<br/>');
    }
}
function User(uName, uYear){
    this.name = uName;
    this.year = uYear;
    this.driveCar = function(car){
        document.write(this.name + ' drives car ' + car.name + '<br/>');
    }
    this.displayInfo = function(){
        document.write('Name: ' + this.name + ' Ages: ' + this.year + '<br/>');
    }
}
//Prototype
User.prototype.hello = function(){
    document.write(this.name + ' says Hello!!!<br/>');
}
User.prototype.maxAge = 110;

var bmw = new Car('BMW', 2000);

var vlad = new User('Vlad', 21);
vlad.driveCar(bmw);
vlad.hello();
document.write(vlad.maxAge + '<br/>');

// check what constructor is used at creation

var isUser = vlad instanceof User;
var isCar = bmw instanceof User;
console.log(isUser);
console.log(isCar);

//incapsulation

function Person(pName, pAge){
    this.name = pName;
    var _age = pAge;
    this.displayInfo = function(){
        document.write('Name: ' + this.name + ' Age: ' + _age);
    }
    this.getAge = function(){
        return _age;
    }
    this.setAge = function(age){
        if(typeof age === 'number' && age >=10 && age <= 110){
            _age = age;
        }
        else{
            console.log('Uncorrect input');
        }
    }
}

var vlados = new Person('Vlados', 21);
vlados.displayInfo();
console.log(vlados.getAge());
vlados.setAge(99);
console.log(vlados.getAge());
vlados.setAge(0);
console.log(vlados.getAge());

//methods Call and Apply

function add(x, y){
    return x + y;
}
var result = add.call(this, 4, 8);

var resultApl = add.apply(null,[3,2]);
console.log(result);
console.log(resultApl);


function Bike(name, year){
    this.name = name;
    this.year = year;
}
var yamaha = new Bike('YAMAHA',2003);
function displayInfoBike(){
    console.log('Model: ' + this.name + ' year: ' + this.year);
}
displayInfoBike.call(yamaha);


