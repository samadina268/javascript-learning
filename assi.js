// question 1
const name = "Abubakar Abdulsamad";
const email = "abubakarsamad26@gmail.com";
const occupation = "Software Developer";

console.log(`My name is ${name}, I work as a ${occupation}, and you can reach me at ${email}.`)

// question 2
const laptop = 450000;
const quantity = 3;
const totalPrice = laptop*quantity;

console.log("Total cost =" +totalPrice);

// question 3

const isLoggedIn = true;

if (isLoggedIn){
    console.log("Welcome Back!");
} else{
    console.log("please log in to continue.");
}

// question 4

let tasks = ["Check emails" ,"Team meeting ","Pay electricity bill ","Review report ","Pick up groceries." ];

console.log("first tasks", tasks[0]);
console.log("last tasks", tasks.at(-1));

tasks.push =("call the bank");

// question 5

const car ={
    brand: "Lamborghini",
    model:"urus",
    year: "2025",
    isInsured: true,
}

console.log("your " +car.brand + " " + car.year + " is insured: " +car.isInsured);

// question 6
const hourlyRate =20000;
const hours = 7;

const totalEarnings = hourlyRate*hours;

console.log("This week's earnings: " +148000);

// question 7
const subscription ={
    plan: ["Premium", "Basic", "e.t.c"],
    price: null,
    isActive: true,
}

console.log(`You are subscribed to the ${subscription.plan[0]} plans. Active ${subscription.isActive}`);

