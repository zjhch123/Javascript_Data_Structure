export default function trialDivision(number) {
  if (number % 1 !== 0) {
    return false;
  }

  if (number <= 1) {
    return false;
  }

  if (number <= 3) {
    return true;
  }

  if (number % 2 === 0) {
    return false;
  }

  const sqrtNumber = Math.sqrt(number)

  for (let i = 3; i <= sqrtNumber; i += 2) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}