# iter-flatten

## Description

Missing flatten over `Iterable`, similar to `Array.flat` but operates on fixed deepness of 1.

## Install

```bash
bun add @fightingdreamer/iter-flatten
```

## Usage

```js
import {flatten} from '@fightingdreamer/iter-flatten'

const vector = [
  ['a','b','c'][Symbol.iterator](),
  ['d','e','f'][Symbol.iterator](),
][Symbol.iterator]()
const result = Array.from(flatten(vector))
const expect = ['a','b','c','d','e','f']
for (const [index, value] of expect.entries()) {
  console.assert(result.at(index) == value)
}
```

## Usage (node / commonjs)

```js
const {flatten} = require('@fightingdreamer/iter-flatten')

const vector = [
  ['a','b','c'][Symbol.iterator](),
  ['d','e','f'][Symbol.iterator](),
][Symbol.iterator]()
const result = Array.from(flatten(vector))
const expect = ['a','b','c','d','e','f']
for (const [index, value] of expect.entries()) {
  assert(result.at(index) == value)
}
```

## Functions
```js
function* flatten<T>(iterator: Iterable<Iterable<T>>): Generator<T>
```

Will chain inner iterables into one long iterable.
