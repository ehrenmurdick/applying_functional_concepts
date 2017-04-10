const add = (x, y) => x + y

const partialAdd = x => y => x + y

const increment = partialAdd(1)

increment(5)
// => 6
// =end

console.assert(6 == increment(5))
