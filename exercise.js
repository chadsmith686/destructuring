// ES2015 Object Destructuring
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

const { a, b } = obj.numbers;

// ES2015 One-Line Array Swap 
[arr[0], arr[1]] = [arr[1], arr[0]]

// raceResults
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})