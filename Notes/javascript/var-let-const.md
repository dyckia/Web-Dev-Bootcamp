## Comparison

| Keyword | Scope  | Hoisting | Can Be Reassigned | Can Be Redeclared |
| ------- | ------ | -------- | ----------------- | ----------------- |
| `var`   | Function scope  | Yes      | Yes      | Yes               |
| `let`   | Block scope     | No       | Yes      | No                |
| `const` | Block scope     | No       | No       | No                |

Conclusion: 
- use `const` whenever possible, naming convention for const variable is UPPERCASE 
- use `let` otherwise
- avoid `var` since it can led to wired bugs

## Scope

```javascript
// function scope
var gender = "male";

if (true) {
  var gener = "female";
}

console.log(gender); // output: "female"

// since var is function scope, even if the reassignment is done in the if block, it still changes the global value
```

## Hoisting
When declearing a variable, two things happen, one is declaration, telling that a variable name exists, another is initalization, which initializes the value. 

JavasScript has a hoisting feature which moves variable and function delcarartions to the top of their scope. Since only the actual declaration is hoisted, not the initialization, the value in the first example returns `undefined`.

```javascript
console.log(x); // output: undefined
var x = 100;
```

Due to hoisting, JavaScript registered x to memory as a variable before the execution of the script. But the value was initialized in the acutal statement step. Thus the output is `undefined` instead of an error. If fact, JavaScript interpreted the above code as:

```javascript
var x;
console.log(x);
x = 100;
```

This can led to unexpected behavior:

```javascript
var x = 100;

function hoist() {
	// A if statement that will never run
	if (false) {
		var x = 200;
	}
	console.log(x);
}

hoist(); //output: undefined

// The var x = 200 declaration was hoisted to the top of the function, regardless excution, thus x returns undefined.
```

Variables defined with `let` are not hoisted to the top.

```javascript
console.log(x);
let x = 100; // ReferenceError
```

## Redeclaration
`let` and `const` can not be redeclared.

```javascript
// Attempt to overwrite a variable declared with var
var x = 1;
var x = 2;

console.log(x); // output: 2

// Attempt to overwrite a variable declared with let
let y = 1;
let y = 2;

console.log(y);  
//output: Uncaught SyntaxError: Identifier 'y' has already been declared

// However let can be reassigned
let z = 1;
z = 2;

console.log(z); // output: 2
```

## Reassignment

Since `const` can not be reassigned, it has to be declared and initialized at the same time.

```javascript
// Declare but do not initialize a const
const TODO;

console.log(TODO);
// Uncaught SyntaxError: Missing initializer in const declaration
```

Although `const` values can not be changed, they are **mutable** if the values are reference type (Array, Object, etc.).

