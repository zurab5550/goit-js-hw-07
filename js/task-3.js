import users from "./users.js"

const getUsersWithGender = (users, gender) => {

const nameGender = users.filter(user=>user.gender===gender).map(user2=>user2.name)
return nameGender;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]