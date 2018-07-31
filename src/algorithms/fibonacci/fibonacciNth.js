export default function fibonacciNth(n) {
  let current = 1
  let previous = 0

  for(let i = 1; i < n; i++) {
    [current, previous] = [current + previous, current]
  }
  
  return current
}