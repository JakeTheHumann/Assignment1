// Assignment 1, Part 2
// 1
var someMonth;
function theMonth() {
    return Date.getMonth();
} ;
//const cCurrentMonth = 'June'; //This line doesn't work and I have no idea why.
var summerMonth = ['June', 'July', 'August'];
function MyLibrary() {} ;

// 2
2.5; //numeric
'Hello World'; //string
true; //boolean
null; //null

// 3
var VEExample1 = 2 + 2;
var VEExample2 = 'FirstName' + ' ' + 'LastName';

// 4
var sFirstName, sLastName, sAddress, sCity, sState, iZipCode, iYourAge, sReferralSource, bMayWeContactYou;

// 5
var sFirstName = 'Jake';
var sLastName = 'Nessirio';
var sAddress = '77777 Sunny Place';
sCity = 'Jamul';
sState = 'California';
iZipCode = 92444;
var iYourAge = 25, sReferralSource = 'Mr. One', bMayWeContactYou = false;

// 6
var iAge = 25;
var sFirstVariable = 'I am ' + iAge + 'years old.';
console.log(sFirstVariable);

var bCake = false;
var sSecondVariable = 'The Cake is a ' + bCake;
console.log(sSecondVariable);

var bUltimateAnswer = true;
var iThirdVariable = 41 + bUltimateAnswer;
console.log(iThirdVariable);

// 7
var sGirl = 'Girl';
function Boy() {
 console.log(sGirl); //outputs 'undefined'
 var sGirl = 'Boy';
 console.log(sGirl); //outputs 'Boy'
}
Boy();
// 8
// Not valid. To fix need to put a backslash before single quote inside the string.
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);

// 9
var n9Null = null; 
var u9Undefined;
console.log(n9Null, u9Undefined)

// 10
console.log(typeof 'Stay Free', typeof 2.5, typeof true, typeof null, typeof undefined);

// 12
var sName = prompt('Please enter your name', 'Linus Torvalds');

// 13
var sCourse = prompt('Which class are you taking?','JavaScript');

// 11
alert('Hello ' + sName + '.\nWelcome to the ' + sCourse + ' class');

// 17
var x = 10;
var y = 20;
console.log(x+y);

// 18
var x = 20;
x += 20;
console.log(x);

// 19
var x = 20;
x *= 5;
console.log(x);

// 20
var x = 20%3;
x /= 1;
console.log(x);

// 21
a = 2;
b = 4;
console.log(a < b || a > b);

// 22
a = 2;
b = 4;
console.log(a == 2 && b == 4 != true);

// 23
function ww() {};
widjet = new ww();
console.log(typeof widget);

// 24
console.log(widjet instanceof ww);

// 25
function ee() {};
console.log(widjet instanceof ee);