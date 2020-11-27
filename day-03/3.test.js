import { getDistance } from './3'

describe('3', () => {
  describe('getDistance', () => {
    it('returns 3 for number 12 in ulam spiral', () => {
      expect(getDistance(12)).toEqual(3)
    })

    it('returns 2 for number 23 in ulam spiral', () => {
      expect(getDistance(23)).toEqual(2)
    })

    it('returns 31 for number 1024 in ulam spiral', () => {
      expect(getDistance(1024)).toEqual(31)
    })
  })
})
