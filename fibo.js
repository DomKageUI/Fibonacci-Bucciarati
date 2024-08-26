// Fibo sequence using loops
function fibonacciLoop(n) {
    let fibo = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    
    return fibo[n];
}

// Fibo sequence using recursion
function fibonacciRecursion(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}


let n = 12;

console.log(`Fibonacci (Loop) of ${n}:`, fibonacciLoop(n));
console.log(`Fibonacci (Recursion) of ${n}:`, fibonacciRecursion(n));
