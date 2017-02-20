console.log("All numbers between -10 and 19");

var count = -10;

while (count <= 19) {
  console.log(count);
  count++;
};

console.log("All even numbers between 10 and 40");

var count = 10;

while (count <= 40) {
  console.log(count);
  count+=2;
}

// while (count <= 40) {
//   if (count % 2 === 0) {
//     console.log(count);
//   }
//   count++;
// }

console.log("All odd numbers between 300 and 333");

var count = 300;

while (count <= 333) {
  if (count % 2 !== 0) {
    console.log(count);
  }
  count++;
}

// while (count <= 333) {
//   if (count % 2 === 1) {
//     console.log(count);
//   }
//   count++;
// }

console.log("All numbers divisible by 5 and 3 between 5 and 50");

var count = 5;

while (count <= 50) {
  if (count % 5 === 0 && count % 3 === 0) {
    console.log(count);
  }
  count++;
}
