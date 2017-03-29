const addThree = (x, y) => (z) => x + y + z

const partial = addThree(2, 4)

partial(5)
// => 11
// =end

console.assert(11 == partial(5))
