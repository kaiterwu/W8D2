function range(start, end) {
  if (start === end) {
    return [start]
  }
  return [start].concat(range(start + 1, end))


  // outputArr = [start]
  // outputArr.push()
}

const sumRec = function(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  let sum = arr.pop()

  return sum + sumRec(arr)
}

const exponent = (b,n) => {
  if (n===0) {
    return 1
  }
  return b*exponent(b,n-1)
}

const exponent2 = (b,n) => {
  if (n===0){
    return 1 
  } else if (n===1) {
    return b 
  }

  if (n % 2 === 0) { 
    return exponent(b,n/2)**2
  } else {
    return (exponent(b,(n-1)/2)**2)*b
  }
}