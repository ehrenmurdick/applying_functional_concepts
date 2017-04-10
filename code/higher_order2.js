const compose = (f, g) => x => f(g(x))

const increment = x => x + 1
const double = x => x * 2

const doubleThenIncrement = compose(increment, double)
doubleThenIncrement(2)
// => 5
// =end

console.assert(5 == doubleThenIncrement(2))
