---
title: Typescript
---

## 1. What is Typescript?
<details><summary>Click to reveal answer</summary>

The **Typescript** is a programming language that builds on javascript by adding static typing. In other words it is a **superset of javascript** designed to help developers to catch errors early during development, making code easier to maintain.
### Features
1. Static Typing - catch erors during compile time instead of run time
2. Transpilation - ts code to js code conversion
3. Interfaces, Enums, Generics, Classes, etc - to support object oriented programming

### Example:

**Javascript**
```js
const n1=10;
const str1 = "Hello";
let num = 100;
let str ="Hello";
num = "world"; //Dynamically Typed/Weak Typed
str = 200; //Dynamically Typed/Weak Typed
```
**Typescript**
```ts
const n1:number = 10;
const str1:number = "Hello";
let num:number = 100;
let str:number ="Hello";
num = "world"; // Error: Type 'string' is not assignable to type 'number'
str = 200;     // Error: Type 'number' is not assignable to type 'string'
// static typing
```
</details>

## 2. How to install Typescript?
<details><summary>Click to reveal answer</summary>

1. **`Install Node Js`**
2. **`npm install -g typescript`** - This will install dependencies along with compiler.
3. Run **`tsc ${filename}`** - This will result in js file for the filename provided which browser/Node Js understood
</details>