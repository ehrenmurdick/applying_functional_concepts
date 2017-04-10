const curry = f => x => y => f(x, y)

const add = (x, y) => x + y
const curriedAdd = curry(add)

curriedAdd(1)(2)
// => 3
// =end

console.assert(3 == curriedAdd(1)(2))
