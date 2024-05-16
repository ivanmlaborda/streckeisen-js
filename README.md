# STRECKEISEN-JS

JavaScript library to classify igneous rocks based on mineralogical composition

## Installation:

```
npm install --save streckeisen-js
```

## Usage:

```js
import { normalize } from 'streckeisen-js'

const mineralogy = {
  q: 60,
  a: 41,
  p: 42,
  f: 0
}

const { Q, A, P, F } = normalize(mineralogy)
```
