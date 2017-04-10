const add = a => b => a + b
const mul = a => b => a * b

// =start
const pipe = (f, g) => x => g(f(x))

const doubleThenInc = pipe(
  mul(2),
  add(1)
)

doubleThenInc(2)
// => 5
// =end

console.assert(5 == doubleThenInc(2))
