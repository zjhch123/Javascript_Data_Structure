export default function setBit(number, position = 0) {
  return number | (1 << position)
}