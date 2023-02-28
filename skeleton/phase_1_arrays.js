 Array.prototype.uniq = function() {
    let outputArray = []
    for (let i = 0; i < this.length; i++) {
        let ele = this[i]
        if (!outputArray.includes(ele)) {
            outputArray.push(ele)
        }
    }
    return  outputArray
 }