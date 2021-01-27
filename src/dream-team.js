const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newMembers;
  let result = '';

  if(!Array.isArray(members)) return false;
  newMembers = members.filter(el => typeof el === 'string');
  let newMembersTrim = newMembers.map(el => el.trim().toUpperCase()).sort();
  for (let i = 0; i < newMembersTrim.length; i++) {
    result += newMembersTrim[i][0];
  }
  return result;
};
