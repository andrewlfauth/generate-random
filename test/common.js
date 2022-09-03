const GenerateRandom = require('../index')
const generateRandom = new GenerateRandom()

function testArgTypesNumbers(...args) {
  let types = [Symbol(), undefined, true, {}, "string", 5]
  const valid = args.pop()

  const invalid = types.filter(t => typeof t !== typeof valid)

  invalid.map(t => {
    it(`throws on type ${typeof t}`, () => {
      expect(() => generateRandom.numbers(...args, t)).toThrow()
    })
  })

 }

function testArgTypesStrings(...args) {
  let types = [Symbol(), undefined, true, {}, "string", 5]
  const valid = args.pop()

  const invalid = types.filter(t => typeof t !== typeof valid)

  invalid.map(t => {
    it(`throws on type ${typeof t}`, () => {
      expect(() => generateRandom.strings(...args, t)).toThrow(TypeError)
    })
  })

 } 



exports.testArgTypesNumbers = testArgTypesNumbers
exports.testArgTypesStrings = testArgTypesStrings



