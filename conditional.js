// to get a hour
const date = new Date();
const hour = date.getHours();
console.log("hour", hour);

// to get a random numner
const random = Math.random() * 20;
const integerRandom = Math.floor(random);
console.log("integerRandom", integerRandom);

const random2 = Math.random() * 10;
const integerRandom2 = Math.floor(random2);
console.log("integerRandom2", integerRandom2);

function logRandomNumber() {
  const random2 = Math.random() * 6;
  const integerRandom2 = Math.floor(random2) + 1;
  console.log("integerRandom2", integerRandom2);
  return integerRandom2;
}

const myNumber = logRandomNumber();

// first example
// if(myNumber % 2 ===0){
//    console.log("This number is even", myNumber)
// }else{
//     console.log("This number is old", myNumber)
// }



// second example
// if (myNumber > 3){
//     console.log("This number is high")
// }else{
//     console.log("This number is low")
// }

// note who to use prompt and alert
// let name = prompt("what your name");
// alert("hello " +name)



// third example
// let balance = 5000;
// let cost = Number(prompt("Emter the cost of the item you want to buy"));
// let remainder = balance - cost;
// if(cost >balance){
//     console.log("insufficient funds");
// }
// else if(cost === balance) {
//     console.log("you can buy")
// }else if (cost < balance){
//     console.log("You can buy and you have left with " + remainder)
// }



// classwork

// let numberss = Number(prompt("What is your number"))
// if(numberss % 2 === 0){
//     console.log("This number is even")
// }else{
//     console.log("This number is old")
// }

// const password = "myPassword123";
// const yourPassword = (prompt("Your password"));
// // alert("Password saved")

// if (yourPassword === password){
//     console.log("You are welcome")
// }else{
//     console.log("incorrect password Try again later")
// }

// function signInUser() {
//   const uniqueId = prompt("Enter unique Id to Login!");
//   switch (uniqueId) {
//     case "123456":
//       console.log("hello, Justin");
//       break;
//     case "412222":
//       console.log("hello, Victoria");
//       break;
//     case "643444":
//       console.log("hello, Buhari");
//       break;
//     case "456786":
//       console.log("Hello, Abiola");
//       break;
//     default:
//       console.log("Error: User not Found!");
//   }
// }

// signInUser()


// function signInUser(){
//     const loginId = Number(prompt("Enter your id to Login"));
// if (loginId === 123456) {
//   console.log("hello, Dina");
// }
// else if (loginId === 234567) {
//   console.log("hello, Justin");
// }
// else if (loginId === 345678) {
//   console.log("hello, Abiola");
// }
// else if (loginId === 456789) {
//   console.log("hello, Victoria");
// } else{
//   console.log("Error user not Found");
// }

// }

// signInUser()
// signInUser()
// signInUser()


// example 4
const person1 = {
    name:"justin",
    age:18,
    gender:"male" 
}

const person2 = {
    name:"justinna",
    age:14,
    gender:"female" 
}

const person3 = {
    name:"temisco",
    age:17,
    gender:"male" 
}

function checkIfValid(person){
    if(person.age > 17 || person.gender === "male"){
        return true;
    }else{
        return false;
    }
}
console.log(`is ${person3.name} a valid person, paste him the funds`, checkIfValid(person2))






// const hour = new Date().getHours();
// let greeting;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

document.getElementById("demo").innerHTML = greeting;
edited;




// class on sunday

