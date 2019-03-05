'use strict';

//patern module

let fun = function () {
    let obj = {greeting: "hello"};

    return{
        display: function(){
            console.log(obj.greeting);
        }
    }
}();

fun.display();

let calculator = (function(){
    let data = { number: 0};

    
    return {
        sum: function(n){
            data.number = data.number + n;
        },
        substract: function(n){
            data.number -= n;
        },
        display: function(){
            console.log("Result: ", data.number);
        }
    }
})();
calculator.display();
calculator.sum(10);
calculator.display();
calculator.substract(4);
calculator.display();

//recursive functions

function getFactorial(n){
    if(n === 1){
        return 1;
    }
    else{
        return n * getFactorial(n - 1);
    }
}
var result = getFactorial(4);
console.log(result);

function getFibonachi(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        return getFibonachi(n-1) + getFibonachi(n-2);
    }
}
var result2 = getFibonachi(8);
console.log(result2);

//override functions

function displayOver(){
    console.log('Good morning!');
    displayOver = function(){
        console.log('Good Evening');
    }
}
displayOver();
displayOver();
displayOver();

//send variable for date
function change(x){
    x = x * 2;
    console.log('x in change:', x);
}
var n = 10;
console.log('n before change:', n);
change(n);
console.log('n after change:', n);

//send variable for link
function changeUser(user){
    user.name = 'Tom';
}
function changeUser2(user){
    user = {
        name: 'Tom'
    }
}
var bob ={
    name: 'Bob'
};
console.log('before change:', bob.name);
changeUser(bob);
console.log('after change:', bob.name);
console.log('update function');
var bob ={
    name: 'Bob'
};
console.log('before change:', bob.name);
changeUser2(bob);
console.log('after change:', bob.name);

//arrow functions

let sum = (x,y) => console.log(x + y);
sum(4,5);
sum(6,7);

var square = n =>{
    let result = n * n;
    return result;
}
console.log('Square is: ', square(5));

let user = (userName, userAge) => ({name: userName, age:userAge});

let tom = user('Tom', 25);
let vlad = user('Vlad', 19);

console.log(tom.name, tom.age);
console.log(vlad.name, vlad.age);

var hello = ()=> console.log('Hello world!');
hello();
