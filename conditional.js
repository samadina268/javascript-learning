// to get a hour
const date = new Date();
const hour = date.getHours();
console.log("hour", hour);

// to get a random numner
const random = Math.random() *20;
const integerRandom = Math.floor(random);
console.log('integerRandom', integerRandom)

const random2 = Math.random() *10;
const integerRandom2 = Math.floor(random2);
console.log('integerRandom2', integerRandom2)

function logRandomNumber(){
    const random2 = Math.random() *6;
    const integerRandom2 = Math.floor(random2) +1;
    console.log('integerRandom2', integerRandom2)
    return integerRandom2
}

const myNumber = logRandomNumber();
if (myNumber > 3){
    console.log("This number is high")
}else{
    console.log("This number is low")
}












// const hour = new Date().getHours();
// let greeting;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

document.getElementById("demo").innerHTML = greeting;
edited;
