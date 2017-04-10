// =start
[1, 2, 3].map(x => x * 2)
// => [2, 4, 6]
// =end

let r = [1, 2, 3].map(x => x * 2)
let e = [2, 4, 6]
// quick and dirty, don't judge!
console.assert(JSON.stringify(e) === JSON.stringify(r))
