export default function pascalTriangle(lineNumber) {
  if (lineNumber === 0) {
    return [1]
  }

  const currentLineSize = lineNumber + 1
  const previousLineSize = currentLineSize - 1

  const currentLine = []

  const previousLine = pascalTriangle(lineNumber - 1)

  for (let numIndex = 0; numIndex < currentLineSize; numIndex += 1) {
    const left = (numIndex - 1) >= 0 ? previousLine[numIndex - 1] : 0
    const right = numIndex < previousLineSize ? previousLine[numIndex] : 0

    currentLine.push(left + right)
  }

  return currentLine
}