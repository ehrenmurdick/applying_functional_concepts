const add = (x, y) => x + y
add(1, 2)

const curriedAdd = x => y => add(x, y)

// and now we can paritally apply it
const increment = curriedAdd(1)

increment(2)
// => 3
// =end

console.assert(6 == curriedAdd(3)(3))
console.assert(6 == increment(5))
