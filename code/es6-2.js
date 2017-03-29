// vanilla js
function returnsAFunction() {
  return function() {
    return "hello!";
  }
}

// es6
const returnsAFunction2 = () => () => "hello!"

returnsAFunction()()
returnsAFunction2()()
