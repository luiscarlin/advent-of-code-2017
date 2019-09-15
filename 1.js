const fs = require("fs")

const main = () => {
  let lines = fs
    .readFileSync("./1.in", "utf8")
    .split(/\r?\n/)
    .filter(Boolean)

  let line = lines[0]

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

  console.log("part 1", sum)
}

if (require.main == module) {
  main()
}
