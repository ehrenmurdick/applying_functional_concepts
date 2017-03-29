const useData = (data) => console.log(data)

const curry = (f) => (a) => (b) => f(a, b)

const slowRead = (name, callback) => {
  setTimeout(() => {
    console.log(`${name} done`)
    callback(`data from ${name}`)
  }, 1000)
}

const curriedSlowRead = curry(slowRead)

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

const readThreeThings = hoist(
  curriedSlowRead('a file'),
  curriedSlowRead('a uri'),
  curriedSlowRead('another thing')
)

readThreeThings((file, uri, thing) => {
  console.log("----------")
  console.log(`file returned: ${file}`)
  console.log(`uri returned: ${uri}`)
  console.log(`thing returned: ${thing}`)
})
