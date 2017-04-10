// =start
const compose = (f, g) => x => f(g(x))

const add = a => b => a + b
const mul = a => b => a * b

const doubleThenInc = compose(
  add(1),
  mul(2)
)

doubleThenInc(2)
// => 5
// =end

console.assert(5 === doubleThenInc(2))
