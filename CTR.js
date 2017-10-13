function convertToRoman(num) {

  var sum = '';

  while (num >= 1000) {
    sum = sum + 'M';
    num -= 1000;
  }

  while (num >= 900) {
    sum = sum + 'CM';
    num -= 900;
  }

  while (num >= 500) {
    sum = sum + 'D';
    num -= 500;
  }

  while (num >= 400) {
    sum = sum + 'CD';
    num -= 400;
  }

  while (num >= 100) {
    sum = sum + 'C';
    num -= 100;
  }

  while (num >= 90) {
    sum = sum + 'XC';
    num -= 90;
  }

  while (num >= 50) {
    sum = sum + 'L';
    num -= 50;
  }

  while (num >= 40) {
    sum = sum + 'XL';
    num -= 40;
  }

  while (num >= 10) {
    sum = sum + 'X';
    num -= 10;
  }

  while (num >= 9) {
    sum = sum + 'IX';
    num -= 9;
  }

  while (num >= 5) {
    sum = sum + 'V';
    num -= 5;
  }

  while (num >= 4) {
    sum = sum + 'IV';
    num -= 4;
  }

  while (num >= 1) {
    sum = sum + 'I';
    num -= 1;
  }

  return sum;

}