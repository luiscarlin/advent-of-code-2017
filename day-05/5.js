import fs from 'fs'

let program = fs.readFileSync('./day-05/5.in', 'utf8').split('\n').map(Number)

let pc = 0
let steps = 0

while (true) {
  steps += 1

  const offset = program[pc]
  const nextPc = offset + pc

  program[pc] += 1

  pc = nextPc

  if (nextPc >= program.length) {
    break
  }
}

console.log('part 1', steps)

program = fs.readFileSync('./day-05/5.in', 'utf8').split('\n').map(Number)

pc = 0
steps = 0

while (true) {
  steps += 1

  const offset = program[pc]
  const nextPc = offset + pc

  if (offset >= 3) {
    program[pc] -= 1
  } else {
    program[pc] += 1
  }

  pc = nextPc

  if (nextPc >= program.length) {
    break
  }
}

console.log('part 2', steps)
