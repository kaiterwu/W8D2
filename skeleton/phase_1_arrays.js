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

 Array.prototype.twosum = function() {
    let outputArr = []

    for (let i = 0; i < this.length; i++) {
        let ele1 = this[i]

        for (let j = i + 1; j < this.length; j++) {
            let ele2 = this[j]

            if (ele1 + ele2 === 0) {
                outputArr.push([i, j])
            }
        }

    }
    return outputArr
 }

 Array.prototype.transpose = function() {
    let output = []

    for (let i = 0; i < this.length; i++) { 
        let subArray = []


        for (let j =0; j < this.length; j++) {
            subArray.push(this[j][i])
        }

        output.push(subArray)
    }
    return output
 }

