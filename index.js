module.exports = class GenereateRandom {
  numbers(min = 0, max = 10, length = null, unique = false) {
    // Invalid inputs
    if (arguments.length && typeof arguments[0] !== 'number') throw new TypeError(`Expect type number, instead got type: ${typeof arguments[0]}`)
    if (arguments.length >= 2 && typeof arguments[0] !== 'number') throw new TypeError(`Expect type number, instead got type: ${typeof arguments[0]}`)
    if (arguments.length >= 2 && typeof arguments[1] !== 'number') throw new TypeError(`Expect type number, instead got type: ${typeof arguments[1]}`)
    if (arguments.length >= 2 && arguments[0] > arguments[1]) throw new RangeError(`Not a vaild range. Please provide your min value first`)
    if (arguments.length >= 3 && typeof arguments[2] !== 'number') throw new TypeError(`Expect type number, instead got type: ${typeof arguments[2]}`)
    if (arguments.length >= 3 && arguments[2] <= 0) throw new RangeError(`Expect positive number, instead got: ${arguments[2]}`)
    if (arguments.length >= 4 && typeof arguments[3] !== 'boolean') throw new TypeError(`Expect type boolean, instead got type: ${typeof arguments[3]}`)
    if (arguments.length >= 4 && arguments[2] > arguments[1] - arguments[0]) throw new RangeError(`Not able to create unique array of length ${arguments[2]} within the range ${arguments[0]} - ${arguments[1]}. Try a greater range or fewer values`)


      // No arguments: return a number from 0 - 10
      if (!arguments.length) {
          return Math.floor((Math.random() * 11))
      }
    
    // One argument: returns a number from 0 - arg[0]
    if (arguments.length === 1) {
      return Math.floor((Math.random() * (arguments[0] + 1)))
    }

    // Two arguments: returns a number from arg[0] - arg[1]
    if (arguments.length === 2) {
      let difference = (max + 1) - min
         return Math.floor((Math.random() * difference + min))
    }

    // Three arguments: returns an array of length arg[2] of values between arg[0] - arg[1]
    if (arguments.length === 3) {
      let difference = (max + 1) - min
      if (length === 1) {
        return Math.floor((Math.random() * difference) + min)
      } else {
        let output = []
        for (let i = 0; i < length; i++) {
          output.push(Math.floor((Math.random() * difference) + min))
        }
        return output
      }
    }

    // Four arguments: returns array of arg[2] length of values from arg[0] - arg[1] : unique if arg[3] = true
    if (arguments.length === 4) {
      if (arguments[3] === true) {
        let difference = (max + 1) - min
        let output = []
        while (output.length < arguments[2]) {
          let n = Math.floor((Math.random() * difference) + min)
          if (output.indexOf(n) === -1) output.push(n)
        }
        return output
      } else {
        let difference = (max + 1) - min
        let output = []

        for (let i = 0; i < values; i++) {
          output.push(Math.floor((Math.random() * difference) + min))
        }
        if (values === 1) return output[0]
        else return output
      }
    }
  }

  strings(length = 5, charcters = null, unique = false) {
    // Handle invalid arguments
    if (arguments.length >= 1 && typeof arguments[0] !== 'number') throw new TypeError(`Expected type Number, instead got: ${typeof arguments[0]}`)
    if (arguments.length >= 1 && arguments[0] < 1) throw new RangeError(`Expected argument 1 to be greater than 0, instead got: ${arguments[0]}`)
    if (arguments.length >= 2 && (typeof arguments[1] === 'number' || typeof arguments[1] === 'symbol' || typeof arguments[1] === 'function' || typeof arguments[1] === 'object' || typeof arguments[1] === 'undefined')) throw new TypeError(`Expected type String for available characters, or type Boolean to indicate unique, instead got: ${typeof arguments[1]}`)
    if (arguments.length >= 3 && typeof arguments[2] !== 'boolean') throw new TypeError(`Expected type boolean, instead got: ${typeof arguments[2]}`)


    // No arguments: returns random string of length 5
    if (!arguments.length) {
      let output = ''
      for (let i = 0; i < 5; i++) {
        let n = Math.floor((Math.random() * 26) + 97)
        output += String.fromCharCode(n)
      }
      return output
    }

    // One argument: returns random string of length arg[0]
    if (arguments.length === 1) {
        let output = ''
        for (let i = 0; i < arguments[0]; i++) {
          let n = Math.floor((Math.random() * 26) + 97)
          output += String.fromCharCode(n)
      }
      return output
      
    }

    // Two arguments: 
    if (arguments.length === 2) {

      if (typeof arguments[1] === 'boolean') {
        if (arguments[1] === true) {
          if (arguments[0] > 24) throw new RangeError(`Unique strings must have a length of no more than 24, instead got: ${arguments[0]}`)
          
          let output = ''

          while (output.length < arguments[0]) {
            let n = Math.floor((Math.random() * 26) + 97)
            if (!output.includes(String.fromCharCode(n))) output += String.fromCharCode(n)
          }
          return output
        } else {
          let output = ''

          for (let i = 0; i < arguments[0]; i++) {
            let n = Math.floor((Math.random() * 26) + 97)
            output += String.fromCharCode(n)
          }
          return output
        }
      }
      
      if (typeof arguments[1] === 'string') {
        let output = ''
        let charCodes = []
      
        for (let i = 0; i < arguments[0]; i++) {
          let n = Math.floor(Math.random() * arguments[1].length)
          output += arguments[1][n]
        }
        return output
      }
    }

    // Three arguments: returns string of length arg[0] from values within arg[1] : unique if arg[3] === true
    if (arguments.length === 3) {
      if (arguments[2] === true) {
        let unique = ''
        for (let i = 0; i < arguments[1].length; i++) {
          if (!unique.includes(arguments[1][i])) unique += arguments[1][i]
          else continue
        }
        if (arguments[0] > unique.length) throw new RangeError(`Not enough unique characters were provided to return a unique string of length: ${arguments[0]}`)
   
        let output = ''
        let charCodes = []
      
        while (output.length < arguments[0]) {
          let n = Math.floor(Math.random() * arguments[1].length)
          if (!output.includes(arguments[1][n])) {
            output += arguments[1][n]
  
          }
        }
        return output
      }
    if (arguments[2] === false) {
      let output = ''
        let charCodes = []
      
        for (let i = 0; i < arguments[0]; i++) {
          let n = Math.floor(Math.random() * arguments[1].length)
          output += arguments[1][n]
        }
        return output
      }
    }
  }

  shuffle(input, generator = null) {
    if (typeof input === 'symbol' || typeof input === 'boolean' || typeof input === 'undefined') 
      throw new TypeError(`Expected type String or Array, instead got type: ${typeof input}`)
    if (arguments.length === 2 && typeof generator !== 'boolean') throw new TypeError(`Expected type Boolean, instead got type: ${typeof gen}`)
    
    let array =  []

    if (typeof input === 'number') {
      for (let j = 0; j < input; j++) {
        array.push(j)
      }
    } else {
      array = typeof input === 'string' ? input.split("") : input
    }

    let m = array.length, t, i
    
    while (m) {
        i = Math.floor(Math.random() * m--)
        t = array[m]
        array[m] = array[i]
        array[i] = t
    }
   
    if (generator) {
      return array.values()
    } else {
      return typeof input === 'string' ? array.join("") : array
    }
  }

}


