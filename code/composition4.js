
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

// =start
// input:  "#HELLO WORLD#"
// output: "%23hello-world%23"

const lower = (s) => s.toLowerCase()
const replace = (x, y) => (s) => s.replace(x, y)

const transform = pipe(
  lower,
  replace(' ', '-'),
  escape
)

transform('#HELLO WORLD#')
// => "%23hello-world%23"
// =end

console.assert("%23hello-world%23" === transform('#HELLO WORLD#'))
