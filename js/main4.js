'use strict';

//create new object
var person = new Object();
var user ={};
user.name = 'Tom';
user.age = 20;

var userUpdate = {
    name: 'Max',
    age: 25
};

var name = 'Bill';
var age = 15;
var display = function () {
    console.log(this.name);
    console.log(this.age);
}
var user = {name, age, display};

var teacher = {user, course: 'Javascript'};
console.log(teacher.user);
console.log(teacher.course);
teacher.user.display();

//functions without word "function"
var userNew = {
    name: 'Vlad',
    age: 21,
    display(){
        console.log(this.name,this.age);
    },
    move(place){
        console.log(this.name, 'goes to', place);
    }
}
userNew.display();
userNew.move('cafe');

//syntacts of arrays

var user = {};
user['name'] = 'Tom';
user['age'] = 19;
user['display'] = function(){
    console.log(user.name);
    console.log(user.age);
};

user['display']();

//uses of strings

var user = {
    'name': 'Tom',
    'age': 26,
    'display': function () {
        console.log(user.name);
        console.log(user.age);
    }
};
user.display();

var user = {
    name: 'Max',
    age: 18,
    'full name': 'Max Johns',
    'display info': function(){
        console.log(user.name);
        console.log(user.age);
    }
};
console.log(user['full name']);
user['display info']();

//deleting 
delete user.name;
console.log(user.name);

//object in other object

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital:{
        name: 'Kiev',
        population: 3500000,
        year: 998
    }
}
console.log('Capital: ' + country.capital.name);
console.log('Population: ' + country['capital']['population']);
console.log('Year of creation: ' + country.capital['year']);

var countryUpdate = {
    name: 'Ukraine',
    languages: ['ukr','rus','eng'],
    capital:{
        name: 'Kiev',
        population: 2500000
    },
    cities:[
        {name:'Poltava', population: 50000},
        {name: 'Lubny', population:47000},
        {name: 'Lviv', population: 1200000}
    ]
};
document.write('<h3> Official languages of Ukraine</h3>');
for(var i = 0; i < countryUpdate.languages.length; i++){
    document.write(countryUpdate.languages[i] + '<br/>');
}

document.write('<h3>Cities of Ukraine</h3>');
for(var i =0; i < countryUpdate.cities.length; i++){
    document.write(countryUpdate.cities[i].name + '<br/>');
}