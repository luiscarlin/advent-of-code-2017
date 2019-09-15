const fs = require("fs")

const main = () => {
  const line = fs
    .readFileSync("./1.in", "utf8")
    .split("")
    .map(n => Number(n))

  console.log("part 1", firstPart(line))
  console.log("part 2", secondPart(line))
}

const firstPart = line => {
  let sum = 0

  for (let i = 0; i < line.length; i++) {
    let currentNum = line[i]
    let nextNum = line[(i + 1) % line.length]

    if (currentNum == nextNum) {
      sum += line[i]
    }
  }

  return sum
}

const secondPart = line => {
  let half = line.length / 2
  let sum = 0

  for (let i = 0; i < line.length; i++) {
    let currentNum = line[i]
    let nextNum = line[(i + half) % line.length]

    if (currentNum == nextNum) {
      sum += line[i]
    }
  }

  return sum
}

if (require.main == module) {
  main()
}
