export default function getBit(number, position = 0) {
  return (number >> position) & 1
}