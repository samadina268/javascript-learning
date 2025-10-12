// for (let i = 2; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log("even number", i);
//   }
// }

// const printEvenNumber = (startNumber, endNumber) => {
//   for (let i = startNumber; i < endNumber; i++) {
//     if (i % 2 === 0) {
//       console.log("even number", i);
//     }
//   }
// };
// printEvenNumber(11, 20);

// classwork 1

function printValues(index) {
  for (let i = 0; i < index; i++) {
      console.log("numberValue", i);
  }
}

printValues(10);

// question 2
function specifiedNumber(index) {
  for (let i = index; i > 0; i--) {
      console.log("numberValue", i);
  }
}

specifiedNumber(10, 0);

// question 3
function multiplesNUmber() {
  for (let i = 3; i < 31; i++) {
      if(i % 3 ===0){
        console.log("numberValue", i);
      }
  }
}

multiplesNUmber();


