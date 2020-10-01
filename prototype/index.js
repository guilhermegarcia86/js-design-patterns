function Developer(name, registration) {

    this.name = name;
    this.registration = registration;

    this.commit = function () {
        return "Can I to commit?\n";
    };
    this.codeReview = function () {
        return "Can I to do code review?\n";
    };
    this.deploy = function () {
        return "Can I to do a deploy?\n";
    };

}

exports.createJunior = function (name, registration) {
    return Object.create(new Developer(name, registration), { position: { value: 'Junior' } })
}

exports.createPleno = function (name, registration) {
    return Object.create(new Developer(name, registration), { position: { value: 'Pleno' } })
}

exports.createSenior = function (name, registration) {
    return Object.create(new Developer(name, registration), { position: { value: 'Senior' } })
}