//Ask the user for there grade.

let verb = prompt('Please select a verb');
alert(`You have chosen ${verb} !`);
const last3 = verb.slice(-3);

let lenghtofverb = (verb.length);
var lenghtofverbnum = parseInt(lenghtofverb);

if (lenghtofverbnum >= 3 && last3 != "ing") {
  verb = verb + "ing" ;
}

if (lenghtofverbnum >= 3 && last3 == "ing") {
  verb = verb + "ly" ;
}

if (lenghtofverbnum < 3) {
  verb = verb ;
}