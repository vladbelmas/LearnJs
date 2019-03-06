

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
//vlad.driveCar(bmw);
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

//inherit

function User(name, age){
    this.name = name;
    this.age = age;
    this.go = function(){
        document.write(this.name + ' goes <br/>');
    }
    this.displayInfo = function(){
        document.write('Name: ' + this.name + '; ages: ' + this.age + '<br/>');
    }
}
User.prototype.maxAge = 110;

function Employee(name, age, comp){
    User.call(this, name, age);
    this.company = comp;
    this.displayInfo = function(){
        document.write('Name: ' + this.name + '; ages: ' + this.age + '; company: ' + this.company + '<br/>');
    }
}
Employee.prototype = Object.create(User.prototype);

var tom = new User('Tom', 26);
var max = new Employee('Max', 19, 'Google');
tom.go();
max.go();
tom.displayInfo();
max.displayInfo();
console.log(tom.maxAge);
console.log(max.maxAge);

// word    this ///////////////////////////


// 1 var  (call or apply)
function foo(){
    console.log(this.bar);
}
var o3 = {bar: 'bar3'};
var bar = 'bar1';
foo();
foo.apply(o3);

// 2 var  (bind)

function foo(){
    console.log(this.bar);
}

var o3 = {bar: 'bar3'};
var bar = 'bar1';
foo();
var func = foo.bind(o3);
func();

//3 var this and arrows functions

var school = {
    title: 'Oxford',
    courses: ['Javascript', 'typescript', 'html'],
    printCourses: function(){
        this.courses.forEach(function(course){
            console.log(this.title, course);
        })
    }
}
school.printCourses();

var schoolUpd = {
    title: 'Oxford',
    courses: ['Javascript', 'typescript', 'html'],
    printCourses: function(){
        var that = this;
        this.courses.forEach(function(course){
            console.log(that.title, course);
        })
    }
}
schoolUpd.printCourses();

var school2 = {
    title: 'Oxford',
    courses: ['Javascript', 'typescript', 'html'],
    printCourses: function(){
        this.courses.forEach((course)=>console.log(this.title, course));
    }
}
school2.printCourses();

//Декомпозиция (destructuring)

let user = {
    name: 'Tom',
    age: 23,
    phone: '+380959999999',
    email: 'test@gmail.com'
};
let{name,email} = user;
console.log(name);
console.log(email);

let{name: userName, email: mailAdress} = user;
console.log(userName);
console.log(mailAdress);

// desctructuring arrays

let users = ['vlad', 'tom', 'mike'];
let [a,b,c] = users;
console.log(a,b,c);
let[,second,third] = users;
console.log(second,third);

let peolpe = [
    {name2: 'Vova', age: 25},
    {name2: 'Alex', age: 85},
    {name2: 'Nina', age: 19}
];
let [,,{name2}] = peolpe;
console.log(name2);

// desctructuring in functions

function display({name:userName, age:userAge}){
    console.log(userName, userAge);
}
function sum([a,b,c]){
    var result = a + b + c;
    console.log(result);
}

let user3 = {name:'Alice', age: 15, email: 'test@gmail.com'};

let numbers = [2,3,5,7];

display(user3);
sum(numbers);

// Clases
class Person2{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(this.name, this.age);
    }
}

let alex = new Person2('Alex', 55);
alex.display();
console.log(alex.name);


//  Extended

class Person5{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(this.name, this.age);
    }
}

class Employee5 extends Person5{
    constructor(name, age, company){
        super(name, age);
        this.company = company;

    }
    display(){
        super.display();
        console.log('Company is: ' + this.company);
    }
    work(){
        console.log(this.name + ' is hardworking');
    } 
}

let personExample = new Person5('Vlad', 21);
let employeeExample = new Employee5('Bob', 25, 'WLA');

personExample.display();
employeeExample.display();
employeeExample.work();

// static methods 

class Person6{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static nameToUpper(person){
        return person.name.toUpperCase();
    }
    display(){
        console.log(this.name,this.age);
    }
}

let personExample6 = new Person6('Mike Test', 25);
let personName = Person6.nameToUpper(personExample6);
console.log(personName);