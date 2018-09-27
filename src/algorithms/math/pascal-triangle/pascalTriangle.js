export default function pascalTriangle(lineNumber) {
  const currentLine = [1]
  const currentLineSize = lineNumber + 1

  for (let i = 1; i < currentLineSize; i++) {
    currentLine[i] = currentLine[i - 1] * (lineNumber - i + 1) / i
  }

  return currentLine;
}