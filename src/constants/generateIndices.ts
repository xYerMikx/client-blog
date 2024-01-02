export const generateSliceIndices = (arrayLength: number): [number, number] => {
  if (arrayLength < 3) {
    throw new Error("Array length must be at least 3")
  }

  const start = Math.floor(Math.random() * (arrayLength - 3))
  const end = start + 3

  return [start, end]
}
