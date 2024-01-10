export const generateSliceIndices = (arrayLength: number): [number, number] => {
  if (arrayLength < 3) {
    return [0, arrayLength]
  }

  const start = Math.floor(Math.random() * (arrayLength - 3))
  const end = start + 3

  return [start, end]
}
