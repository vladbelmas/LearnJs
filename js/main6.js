// Strings

var name = 'Tom';
var name = new String('Tom');

var hello = 'hello world';
console.log('In string ' + hello + ' :' + hello.length + ' symbols');

// template of string

var hello = `hello ${name}`;
console.log(hello);

var hello3 = hello.repeat(3);
console.log(hello3);

//searches in string

var hello = '  hello world. buy world   r   ';
var key = 'world';
//displayed index 
console.log(hello.indexOf(key));
console.log(hello.lastIndexOf(key));

//return true or faulse
console.log(hello.includes(key));

//substring
console.log(hello.substring(4,5));
console.log(hello.substr(4,4));

//lower upper cases
console.log(hello.toLowerCase());
console.log(hello.toUpperCase());

console.log(hello.charAt(3));
console.log(hello.charCodeAt(3));

//delete space at start and end
console.log(hello.trim());

//concat strings
console.log(hello.concat('helloooooo'));

//replace substring
console.log(hello.replace('world', 'MARSSS'));

console.log(hello.split(' '));

console.log(hello.startsWith('r'));
console.log(hello.endsWith(' '));

// RegExp

var myExp = /hello/;
var myExp = new RegExp('hello');

console.log(myExp.test(hello));
console.log(myExp.exec(hello));

var myExp = /[a-z]/g;
console.log(myExp.exec(hello));

var exp = /wor[a-z]*/gi;
console.log(hello.match(exp));

console.log(hello.search(exp));

console.log(hello.replace(exp,'MARSSSS'));