// bubble sort

Array.prototype.bubbleSort = function() {
  let sorted = false

  while (!sorted) {
    sorted = true
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]]
        sorted = false
      }
    }
  }
  return this
}

arr = [1, 5, 6, 3, 4, 2, 0]

console.log(arr.bubbleSort())

arr[1], arr[2] = arr[2], arr[1]

// console.log(arr)