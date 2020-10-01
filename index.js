const {createJunior, createPleno, createSenior} = require('./prototype');
const {commit, codeReview, deploy} = require('./decorator')

const junior = createJunior("guilherme", "123");
const pleno = createPleno("guilherme", "123");
const senior = createSenior("guilherme", "123");

console.log(commit(junior))
console.log(codeReview(junior))
console.log(deploy(junior))

console.log(commit(pleno))
console.log(codeReview(pleno))
console.log(deploy(pleno))

console.log(commit(senior))
console.log(codeReview(senior))
console.log(deploy(senior))