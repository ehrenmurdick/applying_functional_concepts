// =start
[1, 2, 3].map((x) => x * 2)
// => [2, 4, 6]
// =end

console.assert(2 == [1, 2, 3].map((x) => x * 2)[0])
console.assert(4 == [1, 2, 3].map((x) => x * 2)[1])
console.assert(6 == [1, 2, 3].map((x) => x * 2)[2])
