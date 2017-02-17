var age = prompt("What is your Age?");

if(age < 0){
  alert("Age can't be negative");
} else if (age === 21) {
  alert("Happy Birthday!!");
} else if (age % 2 !== 0) {
  alert("Your age is Odd!");
} else if (Math.sqrt(age)% 2 === 0 || Math.sqrt(age)% 2 === 1) {
  alert("Your age is a perfect square");
};
