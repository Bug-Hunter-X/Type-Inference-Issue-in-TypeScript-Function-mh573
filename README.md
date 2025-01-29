# Type Inference Issue in TypeScript Function

This repository demonstrates an uncommon type inference issue in TypeScript that can occur when using functions as arguments.  The `operate` function expects a function that takes two numbers and returns a number.  However, if you pass a string argument it will not throw error because type inference and implicit any are allowed in TypeScript.

## Bug
The bug lies in the `operate` function's type definition and how it handles type inference. The implicit any and type inference can cause unexpected behavior in this case.

## Solution
The solution involves explicitly specifying the parameter types of the passed function within the `operate` function to prevent implicit any and improve type safety. 
