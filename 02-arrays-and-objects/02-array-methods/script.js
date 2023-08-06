const arr = [34, 55, 95, 20, 15];

arr.push(100); // adds the argument value to the END of the array.
arr.pop(); // pops off (removes) the LAST value from the array.

arr.unshift(100); // adds the argument value to the BEGINNING of the array.
arr.shift(); // removes the argument value from the BEGINNING of the array

// arr.reverse(); // reverses the order of values in the array.

console.log(arr);

let x;

x = arr.includes(200); // returns boolean true/false if the array includes the argument.

x = arr.indexOf(95); // returns the index value of the argument.

x = arr.slice(1); // returns a NEW array sliced from the index in the argument til the end of the array.
x = arr.slice(1, 4); // returns a NEW array sliced from the index in the first argument ending RIGHT BEFORE the index in the second arguement.

x = arr.splice(1, 2); /* 
-it changes the original array 
-the first argument is the starting index of splicing (removing)
-the second argument is how many indexes you want to splice out after the first argument index.
-it can take more arguments which are pushed to the end of the array as values.
*/

console.log(x, arr);
