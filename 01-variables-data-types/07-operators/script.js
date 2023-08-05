// 1. Arithmatic Operators:

let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 5 % 5;

// 2. Concatenation:

x = "Hello" + " " + "World";

// 3. Exponent

x = 2 ** 3;

// 4. increment:

x = 1;
x = x + 1; // This would give us 2
x++; // Now this would give us 3 because the ++ increments by 1.

// 5. Decrement

// Oposite of increment. instead of using ++ we use -- to decrement by 1.
x--; // Now we're back to 2

// 6. Assignment Operator

x = 10; // we assign a value with the '=' operator.
x += 5; // this is shorthand for x = 10 + 5. So the result will be 15. This works with every other arithmatic operator.

// 7. Comparison Operators

x = 2 == "2"; // the double equal evaluates only the value. So this will result in a 'true'
x = 2 === "2"; // the strict triple equal evaluates BOTH the value AND the type. So this will result in a 'false'
x = 2 != "2"; // not equal evaluates only the value
x = 2 !== "2"; // stric not equal evaluates BOTH the value AND the type.
x = 10 > 5; // 10 is greater than 5. true
x = 5 < 10; // 5 is less than 10. true
x = 10 >= 5; // 10 is greater than or equal to 5. true
x = 10 <= 5; // 10 is less than or equal to 5. false

console.log(x);
