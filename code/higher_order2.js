const compose = (f, g) => (x) => f(g(x))

const inc = (x) => x + 1
const double = (x) => x * 2

const doubleThenInc = compose(inc, double)
doubleThenInc(2)
// => 5
// =end

console.assert(5 == doubleThenInc(2))
