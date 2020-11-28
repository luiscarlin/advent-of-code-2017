import ulam from 'zero-indexed-ulam-spiral'

const getDistance = (number) => {
  const [x1, y1] = ulam.getLatticeCoordinatesFor(number - 1)

  return Math.abs(x1) + Math.abs(y1)
}

const getGeneratedNumber = (x, y, position, grid) => {
  if (position === 1) {
    return 1
  }

  let accumulator = 0

  const currentIndex = ulam.getSpiralIndexForCoordinates([x, y]) + 1

  const neightbors = [
    // up
    [x, y - 1],
    //down
    [x, y + 1],
    //right
    [x + 1, y],
    //left
    [x - 1, y],
    //top right
    [x + 1, y + 1],
    //top left
    [x - 1, y + 1],
    //bottom left
    [x - 1, y - 1],
    //bottom right
    [x + 1, y - 1],
  ]

  neightbors.forEach((coordinates) => {
    const generatedNumber = grid[coordinates]
    const index = ulam.getSpiralIndexForCoordinates(coordinates) + 1

    if (currentIndex > index && generatedNumber) {
      accumulator += generatedNumber
    }
  })

  return accumulator
}

const findFirstNumberGreaterThanNum = (stop) => {
  let generatedNumber = 0
  let position = 1
  const grid = {}

  while (generatedNumber < stop) {
    const ulamPosition = position - 1

    const [x, y] = ulam.getLatticeCoordinatesFor(ulamPosition)

    generatedNumber = getGeneratedNumber(x, y, position, grid)
    grid[`${x},${y}`] = generatedNumber

    position += 1
  }

  return generatedNumber
}

console.log('part 1', getDistance(368078))
console.log('part 2', findFirstNumberGreaterThanNum(368078))

export { getDistance }
