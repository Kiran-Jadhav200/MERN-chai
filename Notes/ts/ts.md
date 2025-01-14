# TypeScript Notes

## Introduction
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## Installation
To install TypeScript, you can use npm:
```bash
npm install -g typescript
```

## Basic Types
Here are some basic types in TypeScript:

```typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let x: [string, number] = ["hello", 10];
```

## Functions
Functions in TypeScript can have typed parameters and return types:

```typescript
function add(x: number, y: number): number {
    return x + y;
}
```

## Interfaces
Interfaces define the shape of an object:

```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
```

## Classes
TypeScript supports object-oriented programming with classes:

```typescript
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

## Modules
Modules help organize code by splitting it into smaller pieces:

```typescript
export class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }
}

import { Calculator } from './Calculator';
console.log(Calculator.add(2, 3));
```

## Generics
Generics allow you to create reusable components:

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
```

## Enums
Enums allow a developer to define a set of named constants:

```typescript
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
```

## Conclusion
TypeScript enhances JavaScript by adding type safety, interfaces, and other features that help in building robust applications.

For more information, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/).