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