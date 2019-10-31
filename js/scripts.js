//back-end logic//



//front-end logic//
$(document).ready(function() {
  $("form.group").submit(function(event) {
    event.preventDefault();

    var someNumber = $('input#numberInput').val();
    var inputArray = (Array.from(someNumber.toString()).map(Number)).reverse();
    var romanOnes = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var romanTens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    var romanHundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    var romanThousands = ['', 'M', 'MM', 'MMM']
    var outputArray = [];



    if ((inputArray[0] >= 1) && (inputArray[0] <= 9) && (inputArray.length === 1)) {
      outputArray.push(romanOnes[inputArray[0]]);
    } else if ((inputArray[1] >= 1) && (inputArray[1] <= 9) && (inputArray.length === 2)) {
      outputArray.push((romanTens[inputArray[1]]) + (romanOnes[inputArray[0]]));
    } else if ((inputArray[2] >= 1) && (inputArray[2] <= 9) && (inputArray.length === 3)) {
      outputArray.push((romanHundreds[inputArray[2]]) + (romanTens[inputArray[1]]) + (romanOnes[inputArray[0]]));
    } else if ((inputArray[3] >= 1) && (inputArray[3] <= 3) && (inputArray.length === 4)) {
      outputArray.push((romanThousands[inputArray[3]]) + (romanHundreds[inputArray[2]]) + (romanTens[inputArray[1]]) + (romanOnes[inputArray[0]]));
    } else {
      alert("remove leading zeros")
    };

    $(".result").text(outputArray);

  });
});
