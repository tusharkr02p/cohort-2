

/* variable and if else condition 

let firstName = "Tushar kumar";
let age  = 22;
isPassed = false;

if(isPassed == true){
    console.log(firstName, "is passed");
}else{
    console.log(firstName, " is failed");
}
    */

// loop
/*
let sum =  0;

for (let i = 0; i < 15; i++){
    console.log(i);
    sum  += i;
}
console.log(sum);
*/

//array


// let arr = [ "Tushar", "prashant", " prince", 'pritam'];
// let gender = [ "male", " male", "male", "female"]

// for(let i = 0 ; i < arr.length; i++){
//     if(gender[i]== "female"){
//         console.log(arr[i]);
//     }
// }
// // objects

// const allUsers = [{
//     firstName : "Tushar kumar ",
//     age : 22,
//     gender : "male"
// },  {
//     firstName : "prashant",
//     age: 24,
//     gender : "male"

// }, {
//     firstName: "alia",
//     age : 20,
//     gender: "female",
// }];

// for(let i = 0 ; i< allUsers.length; i++){
//     if(allUsers[i]["gender"] == "female"){
//         console.log(allUsers[i]["firstName"]);
//     }
//}

//function


// function sum(a ,b){
//     return a + b;
// }

// console.log(sum(5,8)); 

//callback


// function sum(num1 , num2, fntocall){
//     const result = num1 + num2;
//     fntocall(result);

// }

// function displayAct(data){
//     console.log("result of sum is: " , data)
// }

// function displaypass(data){
//     console.log("sum of result is : " , data)
// }
// console.log(sum(1,2, displaypass) ) 

//set timeout

// function greet(){
//     console.log("hello world");
// }

// setTimeout(greet , 3 *2000);


//class

// class Animal {
//     constructor(name,speak,legcount){
//         this.name = name;
//         this.speaks = speak;
//         this.legcount = legcount;
//     }
//     speak(){
//         console.log("hi there " + this.speaks);
//     }
//     sayName(){
//         console.log("hi there " + this.name);
//     }

//     legcount(){
//         console.log("hi there" + this.legcount);
//     }

// }


// let Animal1 = new Animal("dog", " bhow bhow" , 4);
// let cat = new Animal("cat", " meow meow " , 4);

// Animal1.sayName();

//function for date

// function dateMethod(){
//     const currentDate = new Date();
//     console.log("current Date" , currentDate);

//     console.log("date" , currentDate.getDate());
//     console.log("getmomnth" , currentDate.getMonth() + 1);
//     console.log("year" , currentDate.getFullYear());

//     console.log("hours", currentDate.getHours());
//     console.log("minutes", currentDate.getMinutes());
//     console.log("second", currentDate.getSeconds());

//     console.log("Get time", currentDate.getTime());

// }
// dateMethod();

// const currentDate = new Date();
// let a = 0;
// for(let i = 0 ; i <=1745;i++ ){
//     a += i ; 
// }

// console.log(a);

// function calculateSum(n){
//     let a  = 0 ;
//      for(let i = 0 ; i< n ; i++){
//         a += i;
//      }
//      return a;

// }

// const beforeDate = new Date();
// const beforeTimeinMs = beforeDate.getTime();
// calculateSum(100000000);

// const afterDate = new Date();
// const afterTimeinMs = afterDate.getTime();

// console.log(afterTimeinMs - beforeTimeinMs);


// function square(n){
//     return n * n ; 
// }

// function sumOfSquare(a,b){
//     let val1 = square(a);
//     let val2 = square(b);

//     return val1 + val2;

// }

// console.log(sumOfSquare(5,5));

//now using callback

// function square(n){
//     return n * n ; 
// }

// function cube(n){
//     return n * n * n;
// }

// function sumOfSomething(a , b , fn){
//     let val1 = fn(a);
//     let val2 = fn(b);
//     return val1 + val2;
// }

//  console.log(sumOfSomething(5,2,cube));

//async function  vs sync function

 function findSum(n){
    let ans = 0 ;
     for(let i = 0 ; i <= n; i++){
        ans += i ;
     }
     return ans; 
}

const { promises } = require("dns");
// function findtill100(){
//     console.log(findSum(100));
// }
// // for busy the threads e use sync sleep
// function syncsleep(){
//     let a = 1 ;
//     for(let  i = 0 ; i < 1000000000; i++){
//         a++;
//     }
// }
// syncsleep();
// findtill100();
// setTimeout(findtill100, 1000);
// console.log("Hello World")


// const fs = require("fs");

// fs.readFile("a.txt","utf-8",(err,data)=>{
//     console.log(data);
// })

//my own asynchornous function

const fs = require("fs");

function tusharreadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8",(err, data)=>{
            resolve(data);
        })
    })
}


async function main(){

    const value  = await tusharreadFile();
    console.log(value);
}

main();
// function onDone(data){
//     console.log(data);
// }

// tusharreadFile().then(onDone);