const increment = x => x + 1
const double = x => x * 2

const doubleThenIncrement = x => increment(double(x))

doubleThenIncrement(2)
// => 5
// =end
console.assert(doubleThenIncrement(2) == 5)
