let zipcode = prompt('Please insert your zipcode here');
let converttonum = (parseInt(zipcode));
let lenghtzipcodes = (zipcode.length);
let isnum = /^\d+$/.test(zipcode);
let blankspacepresent = /\s/.test(zipcode);


if (lenghtzipcodes == 5 && isnum == true && blankspacepresent == false) {
  console.log("Success"); }
  else {
  console.log("Error");
}



