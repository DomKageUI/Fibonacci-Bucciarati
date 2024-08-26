# Fibonacci-Bucciarati
Whats a Eagle to a Hawk
Whats a Hawk Tuah to a God


# Fibonacci Sequence

Fibonacci sequence is a series of numbers where each number is the sum of the two numbers that come before it. It follows the rule that each number is equal to the sum of the preceding two numbers.

# Loop and Recursion

 A loop is a control structure that repeats a block of code a certain number of times or while a condition is true. While recursion is a process where a function calls itself directly or indirectly to solve a problem.

 # Big O Notation

The loop Fibonacci function has a time complexity of O(n) because it runs a simple loop `n` times, and it uses O(n) space to store the sequence. The recursive Fibonacci function, on the other hand, has a time complexity of O(2^n) because it makes two recursive calls for each value of `n`, leading to exponential growth in the number of calls, and it uses O(n) space due to the depth of the recursion stack.



The recursive Fibonacci function has a time complexity of O(2^n) because each call to the function spawns two more calls, which doubles the number of calls at each level. It uses O(n) space since the deepest point in the recursion stack is `n` calls deep.