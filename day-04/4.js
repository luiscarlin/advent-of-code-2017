import fs from 'fs'

const sotrString = (text) => text.split('').sort().join('')

const passphrases = fs.readFileSync('./day-04/4.in', 'utf8').split('\n')

let numberValid = 0

passphrases.forEach((passphrase) => {
  const words = passphrase.split(' ')

  if (new Set(words).size === words.length) {
    numberValid += 1
  }
})

console.log('part 1', numberValid)

numberValid = 0

passphrases.forEach((passphrase) => {
  const words = passphrase.split(' ')

  const sortedWords = words.map((word) => sotrString(word))

  if (new Set(sortedWords).size === sortedWords.length) {
    numberValid += 1
  }
})

console.log('part 2', numberValid)
