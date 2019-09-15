const fs = require("fs")

const main = () => {
  const line = fs
    .readFileSync("./1.in", "utf8")
    .split(/\r?\n/)
    .filter(Boolean)[0]

  console.log("part 1", firstPart(line))
  console.log("part 2", secondPart(line))
}

const firstPart = line => {
  let sum = 0

  for (let i = 0; i < line.length; i++) {
    let currentNum = line[i]
    let nextNum = 0

    if (i == line.length - 1) {
      nextNum = line[0]
    } else {
      nextNum = line[i + 1]
    }

    if (currentNum == nextNum) {
      sum += parseInt(line[i])
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
      sum += parseInt(line[i])
    }
  }

  return sum
}

if (require.main == module) {
  main()
}
