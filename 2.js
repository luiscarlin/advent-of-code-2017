const fs = require("fs")

const main = () => {
  let lines = fs.readFileSync("./2.in", "utf8").split("\n")
  lines = lines.map(line => line.split("\t").map(num => parseInt(num)))

  const sum = lines
    .map(line => findMinMaxLineCheckSum(line))
    .reduce((acc, num) => acc + num, 0)
  console.log("part 1", sum)

  const divSum = lines
    .map(line => findDivisibleCheckSum(line))
    .reduce((acc, num) => acc + num, 0)
  console.log("part 2", divSum)
}

function findMinMaxLineCheckSum(line) {
  return Math.abs(Math.max(...line) - Math.min(...line))
}

function findDivisibleCheckSum(line) {
  let total = 0

  for (let i = 0; i < line.length; i++) {
    let num = line[i]

    for (let j = 0; j < line.length; j++) {
      let otherNum = line[j]

      if (j === i) {
        continue
      }

      if (num % otherNum === 0) {
        total += num / otherNum
      }
    }
  }
  return total
}

if (require.main == module) {
  main()
}
