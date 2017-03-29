const useData = (data) => console.log(data)

const curry = (f) => (a) => (b) => f(a, b)

const slowRead = (name, callback) => {
  callback(`data from ${name}`)
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

const seq = (a, b) => (c) => {
  let l, r
  let aa = a((data) => l = data)
  let bb = b(aa, (data) => r = data)
}

const doStuff = seq(
  curriedSlowRead('url'),
  get('link'),
  curriedSlowRead
)
