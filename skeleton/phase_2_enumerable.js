
Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++ ) {
        callback(this[i])
       
    }
}

const double = (num) => {
    return num*2
}

