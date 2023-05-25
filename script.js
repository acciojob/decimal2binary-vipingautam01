function threeSum(decimalNumber) {
 if (decimalNumber === 0) {
    return '0';
  }

  let binary = '';
  while (decimalNumber > 0) {
    const remainder = decimalNumber % 2;
    binary = remainder + binary;
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binary;
  
}

module.exports = threeSum;
