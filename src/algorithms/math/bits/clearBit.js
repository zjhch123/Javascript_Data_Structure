export default function clearBit(number, position = 0) {
  return number & (~(1 << position))
}