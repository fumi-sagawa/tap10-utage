const sum = (numbers: number[], initialValue = 0) =>
  numbers.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    initialValue
  )

export const average = (numbers: number[]) =>
  Math.floor(sum(numbers) / numbers.length)
