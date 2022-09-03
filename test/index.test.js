const GenereateRandom = require('../index')
const GenerateRandom = require('../index')
const common = require('./common')

describe('GenerateRandom', () => {
  
  let generateRandom 
  beforeEach(() => {
    generateRandom = new GenerateRandom()
  })

  it('exists', () => {
    expect(generateRandom).toBeDefined()
  })
  
  describe('.numbers', () => {
    
    expect.extend({
      toBeWithinRange(received, floor, ceiling) {
        const pass = received >= floor && received <= ceiling
        if (pass) {
          return {
            message: () =>
              `expected ${received} not to be within range ${floor} - ${ceiling}`,
            pass: true,
          }
        } else {
          return {
            message: () =>
              `expected ${received} to be within range ${floor} - ${ceiling}`,
            pass: false,
          }
        }
      },
    })
    
    expect.extend({
      toBeUniqueOfLength(received, length) {
        const pass = Array.isArray(received) && new Set(received).size === received.length && received.length === length
        if (pass) {
          return {
            message: () => `expected [${received}] array is unique and of length ${length}`,
            pass: true,
          }
        } else {
          return {
            message: () => `expected [${received}] to be unique array of length ${length}`,
            pass: false,
          }
        }
      },
    })

    it('exists', () => {
      expect(generateRandom.numbers).toBeDefined()
    })

    it('should return a number between 1 - 10', () => {
      expect(generateRandom.numbers()).toBeWithinRange(0,10)
    })

    common.testArgTypesNumbers(5)

    it('should return a number between 0 - 3', () => {
      expect(generateRandom.numbers(3)).toBeWithinRange(0,3)
    })

    common.testArgTypesNumbers(1, 5)
   
    it('should throw when arg[0] > arg[1]', () => {
      expect(() => generateRandom.numbers(2, 1)).toThrow(RangeError)
    })
    
    it('should return a number between 5 - 10', () => {
      expect(generateRandom.numbers(5, 10)).toBeWithinRange(5,10)
    })
   
    common.testArgTypesNumbers(1, 2 ,5)
   
    it('throws when arg[2] <= 0', () => {
      expect(() => generateRandom.numbers(1, 5, 0)).toThrow(RangeError)
    })

    it('should return an array of 3 numbers between 5 - 10', () => {
      expect(generateRandom.numbers(5, 10, 3)).toEqual([expect.toBeWithinRange(5,10), expect.toBeWithinRange(5,10),expect.toBeWithinRange(5,10)])
    })

    common.testArgTypesNumbers(1, 2, 5, true)
   
    it('throws when arg[3] === true && range is less than arg[2]', () => {
      expect(() => generateRandom.numbers(1, 5, 6, true)).toThrow(RangeError)
    })

    it('should return unique array of length 3', () => {
      expect(generateRandom.numbers(1, 5, 3, true)).toBeUniqueOfLength(3)
    })

  })

  describe('.strings', () => {

    expect.extend({
      toBeUniqueOfLength(received, length) {
        const pass = new Set(received).size === received.length && received.length === length
        if (pass) {
          return {
            message: () => `expected [${received}] string is unique and of length ${length}`,
            pass: true,
          }
        } else {
          return {
            message: () => `expected [${received}] to be unique and of length ${length}`,
            pass: false,
          }
        }
      },
    })

    it('exists', () => {
      expect(generateRandom.strings()).toBeDefined()
    })
    
    it('should return a string', () => {
      expect(generateRandom.strings()).toMatch(/[a-z]/)
    })
    
    it('should return a string with length 5', () => {
      expect(generateRandom.strings()).toHaveLength(5)
    })

    common.testArgTypesStrings(5)

    it('throws when arg[0] <= 0', () => {
      expect(() => generateRandom.strings(0)).toThrow(RangeError)
    })

    it('should return a string with length 10', () => {
      expect(generateRandom.strings(10)).toHaveLength(10)
    })
    
    it('throws when arg[1] === true && arg[1] > 24', () => {
      expect(() => generateRandom.strings(25, true)).toThrow(RangeError)
    })

    it('should return unique string of length 20', () => {
      expect(generateRandom.strings(20, true)).toBeUniqueOfLength(20)
    })

    it('should return a string matching "a"', () => {
      expect(generateRandom.strings(1, "a")).toMatch("a")
    })

    it('should return a unique string', () => {
      expect(generateRandom.strings(6, "aabbccddeeffgg", true)).toBeUniqueOfLength(6)
    })

  })

  describe('.shuffle', () => {
    
    it('should return array [1,2,3,4] in random order', () => {
      expect(generateRandom.shuffle([1,2,3,4])).not.toBe([1,2,3,4])
    })
    
    it('should return array containing 1,2,3,4', () => {
      expect(generateRandom.shuffle([1,2,3,4])).toEqual(expect.arrayContaining([1,2,3,4]))
    })

    it('should return string "abcdefg" in random order', () => {
      expect(generateRandom.shuffle("abcedfg")).not.toBe("abcdefg")
    })
    
  })
  
})