import { it } from '@jest/globals'
import { part1 } from './6'
describe('6', () => {
  describe('part1', () => {
    it('finds duplicate bank config in 5 cycles', () => {
      expect(part1([0, 2, 7, 0])).toBe(5)
    })
  })
})
