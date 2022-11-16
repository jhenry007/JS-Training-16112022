//Ask the user which language they speak.

let language = prompt('Which language do you speak');
let languagetolowercase = language.toLowerCase();

alert(`You have chosen ${languagetolowercase} as your preferred language`);

switch(languagetolowercase) {
case 'french':
console.log("Bonjour");
break;
case 'english':
alert(`Hello !`);
break;
case 'hebrew':
alert(`Shalom !`)
break;
default:
alert(`01110011 01101111 01110010 01110010 01111001!`)

}
