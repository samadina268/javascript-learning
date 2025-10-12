// question 1
function question1() {
  const userNumber = Number(prompt("Your Number."));
  if (userNumber % 2 === 0) {
    console.log("this number is even");
  } else {
    console.log("this number is old");
  }
}
question1();

// question 2
function question2() {
  const userAge = Number(prompt("What you age?"));
  const notEligible = 18 - userAge;
  if (userAge > 18) {
    console.log("you are eligible to vote");
  } else {
    console.log(
      `You are not eligible, to vote come back in the next ${notEligible} years`
    );
  }
}

question2();

// question 3
function question3() {
  const userNumber1 = Number(prompt("Input your first number"));
  const userNumber2 = Number(prompt("Input your second number"));

  if (userNumber1 > userNumber2) {
    console.log(`${userNumber1} is the larger number.`);
  } else if (userNumber1 < userNumber2) {
    console.log(`${userNumber2} is the larger number.`);
  } else {
    console.log("The numbers are equal");
  }
}

question3();

// question 4
function question4() {
  const testScore = Number(prompt("What you test score"));

  if (testScore >= 70 && testScore <= 100) {
    console.log("Your grade is A");
  } else if (testScore >= 60 && testScore <= 69) {
    console.log("Your grade is B");
  } else if (testScore >= 50 && testScore <= 59) {
    console.log("Your grade is C");
  } else if (testScore >= 40 && testScore <= 49) {
    console.log("Your grade is D");
  } else if (testScore >= 35 && testScore <= 39) {
    console.log("Your grade is E");
  } else if (testScore >= 0 && testScore <= 34) {
    console.log("Your grade is F");
  } else {
    console.log("invalid test score");
  }
}
question4();

// question 5
function question5() {
  const signNumber = Number(prompt("Your sign number"));
  if (signNumber > 0) {
    console.log("This number is positive");
  } else if (signNumber < 0) {
    console.log("This number is negative");
  } else if (signNumber === 0) {
    console.log("This number is Zero");
  }
}

question5();

// question 6
function question6() {
  const operationNumber1 = Number(prompt("Your first operation number?"));
  const operationNumber2 = Number(prompt("Your first operation number?"));
  const operationSign = prompt("Your first operation sign (+ , _ , * , /)?");

  if(operationSign === "+") {
    console.log(`${operationNumber1} +${operationNumber2}`) 
  }else if(operationSign === "-") {
    console.log(`${operationNumber1} - ${operationNumber2}`)
  }else if(operationSign === "*") {
    console.log(`${operationNumber1} * ${operationNumber2}`)
  }else if(operationSign === "/") {
    console.log(`${operationNumber1} / ${operationNumber2}`)
  }else{
    console.log("invalid number")
  }
    
  

  console.log(
    `You answer is ${operationNumber1}, ${operationNumber2} and your sign is ${operationSign}`
  );
}

question6();

// question 7
function question7() {
  const year = Number(prompt("input a year"));
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} This is a leap year`);
  } else {
    console.log(`${year} This is not a leap year`);
  }
}

question7();

// question 8
function question8() {
  const password = prompt("input your password");
  if (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  ) {
    console.log("This is a stong password");
  } else {
    console.log("This is a week password");
  }
}

question8();

// question 9
function question9() {
  const trafficLight = prompt(
    "What is the traffic color  (red, yellow, green)"
  );
  if (trafficLight === "red") {
    console.log("Stop.");
  } else if (trafficLight === "yellow") {
    console.log("Ready!!");
  } else if (trafficLight === "green") {
    console.log("GO !!!");
  } else {
    console.log("invalid traffic color.");
  }
}

question9();

// question 10
function question10() {
  const eleUnitCons = Number(prompt("Total number of electricity consumed"));

  const unitPerNaira = 1000;
  const electricBill = eleUnitCons * unitPerNaira;

  console.log(`Total bill is ${electricBill}`);
}

question10();


function checkPassword(password) {
  if (password.length >= 6) {
    return "This is a stong password";
  } else {
    return "This is a week password";
  }
}

console.log(checkPassword("samadina"));


