export default function fastPowering(number, power) {
  if (power === 0) {
    return 1
  }

  if (power % 2 === 0) {
    const prev = fastPowering(number, power / 2)
    return prev * prev
  }

  const prev = fastPowering(number, Math.floor(power / 2))
  return prev * prev * number
}