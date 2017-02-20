var age = Number(prompt("What is your Age?"));

if(age < 0){
  alert("Age can't be negative");
} else if (age % Math.sqrt(age) === 0) {
  alert("Your age is a perfect square");
} else if (age === 21) {
  alert("Happy Birthday!!");
} else if (age % 2 !== 0) {
  alert("Your age is Odd!");
} else {
  alert("Your age is Even!");
};
