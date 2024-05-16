import { normalize } from 'streckeisen-js'

const mineralogy = {
  q: 65,
  a: 41,
  p: 42,
  f: 0
}

const { Q, A, P, F } = normalize(mineralogy)

console.log({ Q, A, P, F })
