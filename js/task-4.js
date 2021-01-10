import users from "./users.js"

const getInactiveUsers = users => {
  const notActive = users.filter(user => user.isActive ===false)
  return notActive;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]