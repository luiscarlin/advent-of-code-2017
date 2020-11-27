import ulam from 'zero-indexed-ulam-spiral'

const getDistance = (number) => {
  const [x1, y1] = ulam.getLatticeCoordinatesFor(number - 1)

  return Math.abs(x1) + Math.abs(y1)
}

console.log('part 1', getDistance(368078))

export { getDistance }
