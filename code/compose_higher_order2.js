const _hoistN = (acc, fns, c) => {
  let f = fns[fns.length - 1]
  if (f) {
    f((x) => {
      _hoistN([x, ...acc], fns.slice(0, fns.length - 1), c)
    })
  } else {
    c.apply(this, acc)
  }
}

const hoist = (...fns) => (c) => {
  return _hoistN([], fns, c)
}

const curry = (f) => (a) => (b) => f(a, b)
const asyncRead = (name, f) => setTimeout(() => f(name), 1)

// =start
const curriedAsyncRead = curry(asyncRead)

hoist(
  curriedAsyncRead('a file'),
  curriedAsyncRead('a uri'),
  curriedAsyncRead('another thing')
)((file, uri, thing) => {
  // all three are available here!
})
// =end
hoist(
  curriedAsyncRead('a file'),
  curriedAsyncRead('a uri'),
  curriedAsyncRead('another thing')
)((file, uri, thing) => {
  console.assert('a file' == file)
  console.assert('a uri' == uri)
  console.assert('another thing' == thing)
})
