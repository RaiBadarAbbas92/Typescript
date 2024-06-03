// Typescript is superset of jvascript
console.log("Hello World");

// Getting start
// Fundamentals
// Variables
var num =5
var num =7

let digi=98
let figi=39

const pi=3.14
const i=3.14

console.log(num)
console.log(digi);
console.log(pi);


// Data Types
// String , Number , Boolean , Undefinde , Null
var string=""
var number=192
var bollean=true 
var nulll="Empty"

console.log(string);

console.log(number);

console.log(bollean);

console.log(nulll);

let myname="Badar Abbas"
let message="Hello"+myname
console.log(message);

// Find data type of variable
let numer=92
let mname="Badar"
let istrue=false
let Empty;

console.log(typeof Empty); //Undefinded
console.log(typeof istrue); // Boolean
console.log(typeof mname)   //String

// Operators
// Arithmetic operators:
let num1=7
let num2=4

console.log(num1+num2);

console.log(num1-num2);

console.log(num1*num2);

console.log(num1/num2);

console.log(num1%num2);

console.log(num1**num2);

// Assignment operators:

let num3=7
let num4=4

num3+=num4
console.log(num3);

// Compression operators
let num5= 10
console.log(num5==10);
console.log(num5===40);
console.log(num5 !=9);
console.log(num5>6);
console.log(num5<10);
console.log(num5>=10);
console.log(num5<=5);

//Logical Operator
let  n=19
console.log(n >= 5 && n < 10); //
console.log(n > 5 && n < 10); //
console.log(n >= 5 || n < 10); //
console.log(n > 5 || n < 10); //
console.log(!(n < 10)); //
console.log(!(n > 10)); // 



//  if else 
let country="Pakistan"
if(country=="Pakistan"){
    console.log("Correct")
}
else{
    console.log("Wrong")
}

// if else if
let country1="Pakistan"
if(country1=="Pakistan"){
    console.log("Correct")
    }
    else if(country1=="India"){
        console.log("Correct") 
        }
        else{
            console.log("Wrong")
            }           // 

//  Function
function add(){
    let a=10
    let b=20
    let c=a+b
    console.log(c)
}
add()

//  Function with parameter
function addi(a: number,b: number){
    let c=a+b
    console.log(c)
    }
addi(10,20)

function favrotenumber(){
    return 100;
}
favrotenumber()

// arrow function
let favnum = ()=>{
var num9=798
var num10=78
return num9+num10

}
favnum()

// Array
let fruit=["Apple","Orange","Mango","banana","pineapple"]
console.log(fruit[2])// Mango
// Array can store multiple types
let multipletype=["Badar",92,true,null,undefined]
console.log(multipletype)

//Push Pop
let names=["Badar","Abbas","Ali","Zaid","Haroon"]
names.pop()// delete Haroon from list
console.log(names)
names.push("Usman")// Add Usman at the end of list
console.log(names)

// Shift and Unshift
let names1=["Badar","Abbas","Ali","Zaid","Haroon"]
names1.shift()// delete Badar from list
console.log(names1)

names1.unshift("Usman")// Add Usman at the start of list
console.log(names1)

// Slice AND splice methode
let names2=["Badar","Abbas","Ali","Zaid","Haroon"]
let names3=["Usman","Zain","Zainab","Zainab","Zain"]
// slice
console.log(names2.splice(0,1,"BagaJuut","  Jutt saab"))// Abbas Ali
// splice
console.log(names2.splice(1,3))// Abbas Ali Zaid

// Object
var value = {
    name:"Badar",
    age: 20,
    city: "Lahore",
    country: "Pakistan"
    }
    console.log(value.name)
    console.log(value.age)
    console.log(value.city)