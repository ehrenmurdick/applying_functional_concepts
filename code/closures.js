let x = 2

var f = function() {
  return x * 3;
}

f()
// => 6
// =end

console.assert(6 == f())
