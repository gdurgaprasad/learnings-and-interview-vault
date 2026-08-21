---
title: JavaScript
---

## 1. What is the Event Loop in JavaScript?

<details>
<summary>Click to reveal answer</summary>

The **Event Loop** is a single-threaded execution model that continuously monitors the **Call Stack** and the **Task Queue** (and Microtask Queue). When the Call Stack is completely empty, the Event Loop takes the first queued callback and pushes it onto the Call Stack to execute.

### Execution Order Example

```javascript
console.log('1: Sync code');

setTimeout(() => {
  console.log('2: Macrotask (setTimeout)');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Microtask (Promise)');
});

console.log('4: Sync code');

// Output:
// 1: Sync code
// 4: Sync code
// 3: Microtask (Promise)
// 2: Macrotask (setTimeout)
```

</details>

---

## 2. What is the difference between `let`, `const`, and `var`?

<details>
<summary>Click to reveal answer</summary>

The key differences boil down to **Scope**, **Hoisting / Temporal Dead Zone (TDZ)**, and **Reassignment**:

* **`var`**: Function-scoped. Hoisted with an initial value of `undefined`. Allows re-declaration and reassignment.
* **`let`**: Block-scoped (`{}`). Hoisted into the *Temporal Dead Zone* (accessing before initialization throws a `ReferenceError`). Allows reassignment, but **not** re-declaration within the same scope.
* **`const`**: Block-scoped (`{}`). Shares the same hoisting and TDZ behavior as `let`. Must be assigned an initial value at declaration, and **cannot** be reassigned.

### Code Example

```javascript
// 1. Scope Test
if (true) {
  var leakyVar = "Accessible outside block";
  let scopedLet = "Only accessible inside block";
}

console.log(leakyVar); // "Accessible outside block"
// console.log(scopedLet); // Throws ReferenceError

// 2. Reassignment Test
const user = { name: "Alex" };
user.name = "John"; // Allowed (mutating object property)
// user = {};       // Throws TypeError (reassigning constant variable)
```

</details>