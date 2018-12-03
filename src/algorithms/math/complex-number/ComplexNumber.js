export default class ComplexNumber {
  constructor({ re = 0, im = 0 } = {}) {
    this.re = re
    this.im = im
  }

  add(addend) {
    const complexAddend = this.toComplexNumber(addend)

    return new ComplexNumber({
      re: this.re + complexAddend.re,
      im: this.im + complexAddend.im
    })
  }

  subtract(subtractend) {
    const complexSubtractend = this.toComplexNumber(subtractend)

    return new ComplexNumber({
      re: this.re - complexSubtractend.re,
      im: this.im - complexSubtractend.im
    })
  }

  multiply(multiplicand) {
    const complexMultiplicand = this.toComplexNumber(multiplicand)

    return new ComplexNumber({
      re: this.re * complexMultiplicand.re - this.im * complexMultiplicand.im,
      im: this.re * complexMultiplicand.im + this.im * complexMultiplicand.re
    })
  }



  conjugate(number) {
    const complexNumber = this.toComplexNumber(number)

    return new ComplexNumber({
      re: complexNumber.re,
      im: -1 * complexNumber.im
    })
  }

  toComplexNumber(number) {
    if (number instanceof ComplexNumber) {
      return number
    }

    return ComplexNumber({ re: number })
  }
}