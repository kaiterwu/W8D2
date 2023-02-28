

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

const sum =(acc,el) => {
    return acc + el 
}

const multi = (acc,el) =>{
    return acc * el
}

Array.prototype.myReduce = function(callback,acc) {

 
    if (acc === undefined) {
        acc =this.shift()
    }

    this.myEach(function(el){
        acc = callback(acc,el)

    })
    return acc
}   