const curry = (f) => (x) => (y) => f(x, y)

const add = (x, y) => x + y
const cadd = curry(add)

cadd(1)(2)
// => 3
// =end

console.assert(3 == cadd(1)(2))
