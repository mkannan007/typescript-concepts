let numbers: number[] = [];

//map
// Example: Doubling each element in an array
numbers = [1, 2, 3, 4, 5];
const doubledNumbers: number[] = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// Filter
// Example: Filtering even numbers from an array
numbers = [1, 2, 3, 4, 5];
const evenNumbers: number[] = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]

// Find
// Example: Finding the first even number in an array
numbers = [1, 3, 5, 6, 7];
const firstEvenNumber: number | undefined = numbers.find(num => num % 2 === 0);

console.log(firstEvenNumber); // Output: 6

// Reduce
// Example: Summing all elements in an array
numbers = [1, 2, 3, 4, 5];
const sum: number = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 15

// forEach
// Example: Logging each element in an array
numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));
// Output: 1 2 3 4 5

// every
// Example: Checking if all elements in an array are even
numbers = [2, 4, 6, 8];
const allEven: boolean = numbers.every(num => num % 2 === 0);

console.log(allEven); // Output: true

// some
// Example: Checking if any element in an array is even
numbers = [1, 3, 5, 7, 8];
const anyEven: boolean = numbers.some(num => num % 2 === 0);

console.log(anyEven); // Output: true

// includes
// Example: Checking if an element exists in an array
numbers = [1, 2, 3, 4, 5];
const includesThree: boolean = numbers.includes(3);

console.log(includesThree); // Output: true

// indexOf
// Example: Finding the index of an element in an array
numbers = [1, 2, 3, 4, 5];
const indexOfThree: number = numbers.indexOf(3);

console.log(indexOfThree); // Output: 2
