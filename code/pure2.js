let n
const impureAdd = a => a + n

n = 2
impureAdd(1)
// => 3

n = 3
impureAdd(1)
// => 4

// =end
n = 2
console.assert(3 == impureAdd(1))

n = 3
console.assert(4 == impureAdd(1))
