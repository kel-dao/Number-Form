var inputs = [];
var sum = 0;
var avg = 0;

function addFunction(event) {
  var myNumber = document.mathForm.myNumber.value;
  var number = Number(myNumber);
  if(!isNaN(number))  {
    inputs.push(number);
    sum += number;
    avg = sum/inputs.length;
    document.getElementById("count").innerHTML = inputs.length;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("avg").innerHTML = avg;
    console.log(inputs);
    console.log(sum);
    console.log(avg);  
  }
  event.preventDefault();
}

function formReset(event) {
    sum = 0;
    avg = 0;
    inputs = [];
}
