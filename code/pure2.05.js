const assert = console.assert
// =start
let n = 2
const impureAdd = a => a + n

n = 2
assert(3 == impureAdd(1))

n = 3
assert(4 == impureAdd(1))
