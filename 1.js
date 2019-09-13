const fs = require("fs")

const main = () => {
  let lines = fs
    .readFileSync("./1.in", "utf8")
    .split(/\r?\n/)
    .filter(Boolean)

  let line = lines[0]

  let sum = 0
  for (let i = 0; i < line.length; i++) {
    if (line[i] == line[i + 1]) {
      sum += line[i]
    }
  }

  console.log("part 1", sum)
}

if (require.main == module) {
  main()
}
