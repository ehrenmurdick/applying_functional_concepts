const add = (x, y) => x + y
add(1, 2)

const curriedAdd = x => y => add(x, y)
curriedAdd(1)(2)
// =end

console.assert(3 == curriedAdd(1)(2))
