function Memento(state) {
    this.state = state;
    this.getState = function() {
        return this.state;
    }
}

function Originator() {
    this.state = null;
    
    this.add = function(state) {
        this.state = state;
    }
    this.save = function() {
        return new Memento(this.state);
    }
    this.restore = function(memento) {
        return memento.getState();
    }
}

function Historic() {
    this.states = [];

    this.originator = new Originator();
    
    this.add = function(state) {
        this.originator.add(state);
        this.states.push(this.originator.save());
    }
    this.getByIndexOrLast = function(i) {
        if (!this.states.length) {
            return;
        }

        if (!i && i !== 0) {
            i = this.states.length - 1;
        }

        return this.originator.restore(this.states[i]);
    }
    this.countSteps = function() {
        return this.states.length;
    }
    this.getStates = function() {
        return this.states;
    }

}

module.exports = {
    Historic: Historic
};