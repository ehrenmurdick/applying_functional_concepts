const pipe = (f, g) => (x) => g(f(x))

const add = (a) => (b) => a + b
const mul = (a) => (b) => a * b

const incThenDouble = pipe(
  add(1),
  mul(2)
)

incThenDouble(2)
// => 6
