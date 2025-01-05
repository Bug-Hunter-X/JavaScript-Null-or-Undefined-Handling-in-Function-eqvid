function foo(a, b) {
  // Handle null or undefined values using the nullish coalescing operator (??) 
  a ??= 0; //If a is null or undefined, set a to 0
  b ??= 0; //If b is null or undefined, set b to 0
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(10, null)); // Output: 10
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined, 5)); // Output: 5
console.log(foo(10, undefined)); // Output: 10