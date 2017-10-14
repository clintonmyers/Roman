function convertFromRoman(num) {

  var sum = 0;

  while (num != '') {

    if (num.charAt(0) == 'M') {
      sum += 1000;
      num = num.slice(1);
    }
    
    else if (num.charAt(0) == 'C') {
      if (num.charAt(1) == 'M') {
        sum += 900;
        num = num.slice(2);
      }
      else if (num.charAt(1) == 'D') {
        sum += 400;
        num = num.slice(2);
      }
      else {
        sum += 100;
        num = num.slice(1);
      }
    }
    
    else if (num.charAt(0) == 'X') {
      if (num.charAt(1) == 'C') {
        sum += 90;
        num = num.slice(2);
      }
      
      else if (num.charAt(1) == 'L') {
        sum += 40;
        num = num.slice(2);
      }
      
      else {
        sum += 10;
        num = num.slice(1);
      }
    }

    else if (num.charAt(0) == 'I') {
      if (num.charAt(1) == 'X') {
        sum += 9;
        num = num.slice(2);
      }
      
      else if (num.charAt(1) == 'V') {
        sum += 4;
        num = num.slice(2);
      }
      
      else {
        sum += 1;
        num = num.slice(1);
      }
    }

    else if (num.charAt(0) == 'D') {
      sum += 500;
      num = num.slice(1);
    }

    else if (num.charAt(0) == 'L') {
      sum += 50;
      num = num.slice(1);
    }

    else if (num.charAt(0) == 'V') {
      sum += 5;
      num = num.slice(1);
    }
  }

  return sum;

}


function CFR() {

  var a = document.getElementsByName('rom')[0].value;

  document.getElementsByName('numoutput')[0].value = convertFromRoman(a);  
}