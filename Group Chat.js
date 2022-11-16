//Below is an array of users that are online in a group chat.
//const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
//Using the array above, console.log the number of users that are connected to
//the group chat based on the following rules:
//If there is no users (the users array is empty), console.log “no one is online”.
//If there is 1 user, console.log “<name_user> is online”.
//If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
//If there are more than 2 users, console.log the first two names in the users array
//and the number of additional users online.
//For example, if there are 5 users, it should display:
//name_user1, name_user2 and 3 more are online

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
//const users = []; to check if no one is online working
//const users = ["Lea123"] //; to check if 1 user is online
//const users = ["Lea123", "Princess45"]
console.log(users.length)

//to check if no one is online working
if (users.length ==0) {
    console.log("No one is online");
}

//to check if 1 user is online
if (users.length ==1) {
    console.log(users + " is online");
}

//to check if 2 users are online
if (users.length ==2) {
     console.log(users[0] + " and " + users[1] + " are online");
}

//to check if more than 2 users are online
if (users.length >2) {
     console.log(users[0] + " and " + users[1] + " are online, together with " + (users.length-2) + " more users");
}