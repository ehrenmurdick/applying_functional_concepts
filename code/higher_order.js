const curry = (f) => (a) => (b) => f(a, b)

const add = (x, y) => x + y
const cadd = curry(add)

cadd(1)(2)
// => 3
