import fs from 'fs'

const findIndexOfHighestNumber = (arr) => {
  const theMax = Math.max(...arr)

  return [arr.indexOf(Math.max(...arr)), theMax]
}

const part1 = (banks) => {
  const configurationsSeen = []
  let cycles = 0

  while (true) {
    if (configurationsSeen.includes(JSON.stringify(banks))) {
      break
    }

    cycles += 1
    configurationsSeen.push(JSON.stringify(banks))

    let [index, max] = findIndexOfHighestNumber(banks)

    // update one with highest to 0
    banks[index] = 0

    // loop over all the others ones and wrap if needed
    while (max > 0) {
      index += 1
      // save configurations
      banks[index % banks.length] += 1
      max -= 1
    }
  }

  return cycles
}

const banks = fs.readFileSync('./day-06/6.in', 'utf8').split('\t').map(Number)
console.log('part 1', part1(banks))

export { part1 }
