const addThree = (a, b, c) => a + b + c
addThree(1, 2, 3)

const curriedAddThree = (a) => (b) => (c) => addThree(a, b, c)
curriedAddThree(1)(2)(3)
// =end

console.assert(6 == curriedAddThree(1)(2)(3))
