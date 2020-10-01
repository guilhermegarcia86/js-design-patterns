const {createJunior, createPleno, createSenior} = require('./prototype');
const {commit, codeReview, deploy} = require('./decorator');
const Historic = require('./memento').Historic;

let juniorHistoric = new Historic();
juniorHistoric.add("Created Junior\n");
const junior = createJunior("junior", "123");

juniorHistoric.add("Junior trying to commit\n");
console.log(commit(junior));

juniorHistoric.add("Junior trying to do code review\n");
console.log(codeReview(junior));

juniorHistoric.add("Junior trying to deploy\n");
console.log(deploy(junior));

juniorHistoric.getStates().forEach((memento) => {
    console.log(memento.state);
});


let plenoHistoric = new Historic();
const pleno = createPleno("pleno", "456");
plenoHistoric.add("Created Pleno\n");

plenoHistoric.add("Pleno trying to commit\n");
console.log(commit(pleno));

plenoHistoric.add("Pleno trying to do code review\n");
console.log(codeReview(pleno));

plenoHistoric.add("Pleno trying to deploy\n");
console.log(deploy(pleno));

plenoHistoric.getStates().forEach((memento) => {
    console.log(memento.state);
});

let seniorHistoric = new Historic();
const senior = createSenior("senior", "789");
seniorHistoric.add("Created Senior\n");

seniorHistoric.add("Senior trying to commit\n");
console.log(commit(senior));

seniorHistoric.add("Senior trying to do code review\n");
console.log(codeReview(senior));

seniorHistoric.add("Senior trying to deploy\n");
console.log(deploy(senior));

seniorHistoric.getStates().forEach((memento) => {
    console.log(memento.state);
});