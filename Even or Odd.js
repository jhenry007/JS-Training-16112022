//Prompt the user for a number and save it to a variable.
//Check whether the variable is even or odd.
//If it is even, display: “x is an even number”. Where x is the actual number the user chose.
//If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
let insert_num = prompt('Please select a number');

if(insert_num % 2 == 0) {
    alert(`You have chosen ${insert_num}, which is an even number`);
}
else {
    alert(`You have chosen ${insert_num}, which is an odd number`);
}