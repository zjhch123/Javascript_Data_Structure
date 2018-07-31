export default function updateBit(number, position, bitValue) {
  const bitValueNormalized = bitValue ? 1 : 0
  //              将指定位置0            |       x000000   => 制定位置与制定值 | 操作
  //                                 0 | 1 = 1
  //                                 0 | 0 = 0 
  return (number & (~(1 << position))) | (bitValue << position)
}