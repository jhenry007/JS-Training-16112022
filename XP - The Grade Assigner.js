//Ask the user for there grade.

let grade = prompt('Please input your grade');
alert(`You have chosen ${grade} !`);
var num1 = parseInt(grade);

if (num1 >90) {
  console.log("A");
}

if (num1 >80 && num1 <=90) {
  console.log("B");
}

if (num1 >=70 && num1 <=80) {
  console.log("C");
}

if (num1 <70) {
  console.log("D");
}