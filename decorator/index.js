exports.commit = function (Developer) {
    let c = Developer.commit();
    return c + `Developer ${Developer.position} can committing\n`
}

exports.codeReview = function (Developer) {
    let cr = Developer.codeReview();
    let test = Developer.position === 'Junior' ? `Developer ${Developer.position} can not make code review` : `Developer ${Developer.position} can make code review`;
    return cr + test + '\n';
}

exports.deploy = function (Developer) {
    let d = Developer.deploy();
    let test = Developer.position !== 'Senior' ? `${Developer.position} can not deploy` : `Only Developers ${Developer.position} can deploy`;
    return d + test + '\n';
}