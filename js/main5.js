//  Built objects ///////

// Object Date
var currentDate = new Date();
document.write(currentDate);

var fullDate = 'Today: ' + currentDate.getDate() + ' month - ' + currentDate.getMonth() + 'year: ' + currentDate.getFullYear() + ' day ' + currentDate.getDay();
document.write(fullDate);
var hour = currentDate.getHours();
var welcome;
 if(hour < 12){
     welcome = 'good morning';
 }
 else if(hour < 18){
     welcome = 'good day';
 }
 else{
     welcome = 'good evening';
 }
 document.write(welcome + '<br/>');

 var myDate = new Date();
 myDate.setDate(25);
 myDate.setMonth(1);
 myDate.setFullYear(1998);
 var updDate = 'My birthady is on ' + myDate.getDate() + ' month: ' + myDate.getMonth() + 'year' + myDate.getFullYear();
 document.writeln(updDate + '<br/>');

 // Object Math
var x = -25;
var y = 32;
console.log(Math.abs(x),Math.abs(y));

console.log('Max value: ' + Math.max(x,y,25,100) + ' Min value: ' + Math.min(x,y,-5,-23));


//Округления
//до большего
console.log(Math.ceil(5.2), Math.ceil(-6.7));

//до меньшего
console.log(Math.floor(5.2), Math.floor(-6.7));

//до среднего
console.log(Math.round(5.5), Math.round(-6.7));

//random
console.log(Math.random());

//число в степени
console.log(Math.pow(2,5));

//квадратный корень числа
console.log(Math.sqrt(144));

//logarifm
console.log(Math.log(10));

//trygonometry
console.log(Math.sin(90));
console.log(Math.tan(45));


// Arrays ////////
var users = new Array();
var people = [];

var users2 = new Array('user1', 'user2', 'user3');
var people2 = ['user1', 'user2', 'user3'];
document.writeln('In array are ' + people2.length + ' elements <br/>');
for(var i =0; i < people2.length; i++){
    document.write(people2[i] + '<br/>');
}
console.log(people2);
//right way of deep copy arrays

var people3 = people2.slice();
people3[0] = 'user5';
console.log(people3)

// insert in array at end
people3.push('user4');
console.log(people3);

//delete last element in array
people3.pop();
console.log(people3);

//delete first element
people3.shift();
console.log(people3);

//add first element
people3.unshift('user6');
people3.unshift('user7');
people3.unshift('user8');
console.log(people3);

//delete element by index
var deleted = people3.splice(3);
console.log(deleted);
console.log(people3);

var endDeleted = people3.splice(-1);
console.log(endDeleted);
console.log(people3);

// concat arrays
 var people4 = people3.concat(deleted);
 console.log(people4);

 // transform all element in one string

 var arrayString = people4.join(',');
 console.log(arrayString);

 // sort elements from low to high
 people4.sort();
 console.log(people4);

 //reverse all elements

 people4.reverse();
 console.log(people4);

 //find element
console.log(people4.indexOf('user3'));
console.log(people4.lastIndexOf('user3'));

// check if all elements is string

function condition(value, index, array){
    var result = false;
    if((typeof value ) == 'string' ){
        result = true;
    }
    return result;
}
function conditionDisplay(value,index,array){
    console.log(value);
}
function conditionUpdate(value,index,array){
    console.log(value);
    return value *= value;
}
var check = people4.every(condition);
console.log(check);

people4.unshift(5);
console.log(people4);
var check = people4.every(condition);
console.log(check);
var check = people4.some(condition);
console.log(check);

var people4Update = people4.filter(condition);
console.log(people4Update);

people4.forEach(conditionDisplay);
console.log(people4);

// map retun new array 
console.log(people4.map(conditionUpdate));

//Object Number

var x = new Number(34);
var y = new Number('34');
console.log(x + y);

console.log(Number.parseFloat('98.563rr'));
console.log(Number.parseInt('45.56rff'));
var a = 58.56666666666666;
console.log(a.toFixed(5));
