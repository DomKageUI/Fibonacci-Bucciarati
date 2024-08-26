// Fibo sequence using loops
function fibonacciLoop(n) {
    let fib = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib[n];
}

// Fibo sequence using recursion
function fibonacciRecursion(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}


let n = 10;

console.log(`Fibonacci (Loop) of ${n}:`, fibonacciLoop(n));
console.log(`Fibonacci (Recursion) of ${n}:`, fibonacciRecursion(n));
