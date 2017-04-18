const assert = console.assert
// =start
const sortaPure = n => a => a + n

sortaPure(3)(1)

assert(sortaPure(3)(1) == 4)
assert(sortaPure(2)(1) == 3)
