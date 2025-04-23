export function findMin(numbers) {
    if (numbers.length == 0) { return numbers } 
    return Math.min(...numbers)
}

export function calculateSum(numbers) {
    if (numbers.length == 0) { return 0 } 
    return numbers.reduce((accumulator, item) => { return accumulator + item }, 0)
}

export function getOddNumbers(numbers) {
    return numbers.filter((number) => { return number % 2 != 0 })
}

export function getUnion(values1, values2) {
    return values1.concat(values2)
}

export function findSmallestElement(nestedArrs) {
  if (nestedArrs.length === 0) { return [] }

  const flatten = (arr) => {
    let result = []
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        result.push(...flatten(item))
      } else {
        result.push(item)
      }
    })
    return result
  }

  const flatNumbers = flatten(nestedArrs)
  return Math.min(...flatNumbers)
}