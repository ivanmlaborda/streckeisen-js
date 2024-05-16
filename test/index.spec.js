import { normalize } from 'streckeisen-js'

describe('Normalize mineralogy', () => {
  it('Return normalized modal mineralogy', () => {
    // Given
    const mineralogy = {
      q: 34,
      a: 10,
      p: 22,
      f: 0
    }

    // When
    const modalMineralogy = normalize(mineralogy)
    const expectedModalMineralogy = {
      Q: 52,
      A: 15,
      P: 33,
      F: 0
    }

    // Then
    expect(modalMineralogy).toEqual(expectedModalMineralogy)
  })

  it('Normalized oxides must sum 100', () => {
    // Given
    const mineralogy = {
      q: 65,
      a: 41,
      p: 42,
      f: 0
    }

    // When
    const { Q, A, P, F } = normalize(mineralogy)
    const sumOfNormalizedOxides = Q + A + P + F
    const expectedSumOfNormalizedOxides = 100

    // Then
    expect(sumOfNormalizedOxides).toEqual(expectedSumOfNormalizedOxides)
  })

  it('Throw an error if receive incompatible oxides', () => {
    // Given
    const mineralogy = {
      q: 65,
      a: 41,
      p: 42,
      f: 15
    }

    // When
    const expectedErrorMsg = 'Quartz and Feldspatoids are incompatible oxides'

    // Then
    expect(() => normalize(mineralogy)).toThrow(expectedErrorMsg)
  })
})
