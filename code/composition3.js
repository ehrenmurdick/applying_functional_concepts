const add = x => y => x + y
const mul = x => y => x * y
// =start
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

const chained = pipe(
  mul(2),
  mul(3),
  add(1)
)
chained(2)
// => 13
// =end

console.assert(13 == chained(2))
