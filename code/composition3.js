const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

const trace = (label) => (v) => {
  console.log(label + v)
  return v
}

const incThenDouble = pipe(
  add(1),
  trace('after inc: '),
  mul(2)
)
incThenDouble(2)
// after inc: 3
// => 6