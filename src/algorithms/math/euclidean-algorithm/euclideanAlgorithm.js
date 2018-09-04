export default function euclideanAlgorithm(numberA, numberB) {
  const a = Math.abs(numberA)
  const b = Math.abs(numberB)

  return b === 0 ? a : euclideanAlgorithm(b, a % b)
}