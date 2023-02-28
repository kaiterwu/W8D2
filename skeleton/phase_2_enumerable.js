

const double = (num) => {
    return num*2
}

[1, 2, 3].map(function(el) {
    return el * 2;
}); // [2, 4, 6]


Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++ ) {
        callback(this[i])
       
    }
}

Array.prototype.myMap = function(callback) {
    output = []

    this.myEach(function (el) {
        output.push(callback(el));
    })

    return output
}

