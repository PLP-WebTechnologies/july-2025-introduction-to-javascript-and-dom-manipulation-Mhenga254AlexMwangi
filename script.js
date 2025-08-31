// question 1
let name= "Alex";
let  age = 30;
let isStudent = true;//boolean
let people = ["Alex", "Mwangi", "jon"]; //array
const number=10; //constant
 if (age > 18) {
    console.log("You are eligible for driving.");
}else {
    console.log("You are not eligible for driving.");
}
// question 2
function sport(football) {
    console.log("i like, " + football);
}
sport();
function greet() {
    console.log("Hello, welcome to the world of programming!");
}
greet();
// question 3
// for loop
for (let number = 1; number <= 10; number++) {
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}
//while loop 
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}
//Question 4
document.getElementById("title").textContent = "Hello, Alex!";//CHANGE CONTENT
document.getElementById("message").style.color = "blue";//CHANGE COLOR
document.getElementById("message").style.fontSize = "20px";

