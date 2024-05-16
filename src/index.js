const getNormalizedOxide = (oxide, total) => {
  return Math.round(oxide / total * 100)
}

const getModalMineralogy = mineralogy => {
  const { q, a, p, f } = mineralogy
  const totalOxides = q + a + p + f

  if (q > 0 && f > 0) throw new Error('Quartz and Feldspatoids are incompatible oxides')

  const Q = getNormalizedOxide(q, totalOxides)
  const A = getNormalizedOxide(a, totalOxides)
  const P = getNormalizedOxide(p, totalOxides)
  const F = getNormalizedOxide(f, totalOxides)

  return { Q, A, P, F }
}

export { getModalMineralogy as normalize }
