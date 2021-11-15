// document.write("<h1> Hello World </h1>")


/*console.log("This is a string");
console.log('[1, 2, 3, 4]');
console.log({"username}": "ryan",
"score": 70.4});*/

// Variables

var nameuser = "john";
consoles.log(nameuser)

nameuser ='pepe';
consoles.log(nameuser)


let lastname = 'carter'
consoles.log(lastname)


// Constante

const PI = 3.1415;


// camelcase

userName 
user_name

// Operadores

// 1. 

let numberOne = 60;
let numberTwo = 100;

let result = numberOne + numberTwo;

// 2. Concatenacion

let name = 'john';
let lastname = 'carter';

let result = name + lastname;


// 3. comparacion

let numberOne = 60;
let numberTwo = 100;

let result = numberOne > numberTwo;



let name = 'Jhon';
let lastname = 'carter';

let completeName = name + lastname;

console.log(completeName);

// Condicionales

let passwordDB = 'pepe123'
let input = 'pepe123'

let result = input ==   passwordDB;

//if

if (result === true) {
    console.log('Login Correcto');
}

if(result === false) {
    console.log('Login Incorrecto');
} else {
    console.log('Contraseña incorrecta');
}


let score = 70;


if (score > 30) {
    console.log('you need to practice more');
} else if(score > 15) {
    console.log('estas mejorando');
} 

else {
    console.log('you need to follow this tutorial')
}


// switch

let typeCard = 'Debid Card';


switch(typeCard) {
    case 'Debid Card':
        console.log(' This is a debid card');
        break;
    case 'Credit Card':
        console.log('This is a credit card');
        break;  
    default:
        console.log('No Card');      
}

//bugles

//while

let count = 50;

while(count > 0) {
    console.log('Hello World');
    count = count -1;
}

let count = 50;

while(count > 0) {
    console.log(count);
    count = count -1;
}

let count = 1;

while(count <= 50 ) {
    console.log(count);
    count = count ++;
}


// for

let names = ['ryan','joe','john'];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let names = ['ryan','joe','john'];

for(let i = names.length -1; i >= 0; i--) {
    console.log(names[i]);
}

let names = [1, 2, 3];

for(let i = names.length -1; i >= 0; i--) {
    console.log(names[i]);
}


//funcion

function greeting() {
    console.log('Hello');
}

greeting();

function greeting(name) {
    console.log(name)
    console.log('Hello' + name);
}

greeting('markus');

function add(n1, n2) {
    console.log(n1 + n2);
}

add(3, 2);







//Tipos de datos

//"Hello World" // string
//'Hello World' // string

/* 10000
-2.3

//boolean
true 
false

// array 

['joe','ryan','martha']
[1,2,3]
[true, false, true, false]

// object
'ryan'
70.4
14
true


{
    "username": 'ryan',
    "score": 70.4,
    "hours": 14,
    "proffesional": true
}

{
    "username": 'joe',
    "score": 0.4,
    "hours": 1,
    "proffesional": false
}*/