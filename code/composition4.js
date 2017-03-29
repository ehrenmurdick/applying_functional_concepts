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
