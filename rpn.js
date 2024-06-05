// Reverse Polish Notation (RPN) calculation using JavaScript

// Define a function "rpnevaluation" with "expression" argument
function rpnevaluation(expression) {
    // Define an empty stack in which numbers are going to be stored in
    const stack = [];
    // Split the expression into tokens to evaluate each token separately
    const tokens = expression.split(' ');
    // Loop through each token using a for function with and if function inside of it
    for (const token of tokens) {
        // The if function checks if the token is a number
        if (!isNaN(token)) {
            // If the token is a number, it must be pushed to the stack
            // It is previously converted from a string to a floating-point number
            stack.push(parseFloat(token));
        }
        // But if the token is an operator, use pop() function of a stack to pop two numbers from the stack
        // Next, apply the identified operator to the numbers, and with the push() function push the result to the stack
        else {
            // One number is poped from the stack
            const num2 = stack.pop();
            // Second number is poped from the stack
            const num1 = stack.pop();
            // Define operators and their corresponding functions
            switch (token) {
                // Addition is defined, and the result is pushed to the stack
                case '+':
                    stack.push(num1 + num2);
                    break;
                // Subtraction is defined, and the result is pushed to the stack
                case '-':
                    stack.push(num1 - num2);
                    break;
                // Multiplication is defined, and the result is pushed to the stack
                case '*':
                    stack.push(num1 * num2);
                    break;
                // Division is defined, and the result is pushed to the stack
                case '/':
                    stack.push(num1 / num2);
                    break;
                // If the user enters an invalid operator, an exception is thrown
                default:
                    throw new Error('The expression has an invalid operator!');
            }
        }
    }
    // Pop the result of the expression from the stack
    return stack.pop();
}

// Example of usage

// Call the function with the expression as an argument
console.log(rpnevaluation("6 2 3 / +")); 
// Output on console: 6.666666666666667
console.log(rpnevaluation("5 8 *"));
// Output on concole: 40
console.log(rpnevaluation("3 4 + 5 *"));
// Output on console: 35
