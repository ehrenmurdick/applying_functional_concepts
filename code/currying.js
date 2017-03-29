const addThree = (a, b, c) => a + b + c
addThree(a, b, c)

const curriedAddThree = (a) => (b) => (c) => addThree(a, b, c)
curriedAddThree(a)(b)(c)
