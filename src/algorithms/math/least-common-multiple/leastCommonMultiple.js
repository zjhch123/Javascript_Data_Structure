import euclideanAlgorithm from '../euclidean-algorithm/euclideanAlgorithm'

export default function (a, b) {
  return (a === 0 || b === 0) ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b)
}