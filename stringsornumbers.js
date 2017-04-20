var numbers = [];
var sum = 0;
var count = 0;
var avg = 0;
var strings = [];
var cats = "";

function detectFunction(event) {
    var textarea = $("#textarea").val();
    var number = Number(textarea);
    if(!isNaN(number))  {
        numbers.push(count);
        sum += number;
        avg = sum/numbers.length;
        count = numbers.length;
    console.log(textarea);
    console.log(count);
    console.log(sum);
    console.log(avg); 
    $( "#count" ).html(count);
    $( "#sum" ).html(sum);
    $( "#avg" ).html(avg);
    
  } else{
      strings.push(textarea);
      $( "#strings" ).html(strings.length);
      console.log(strings.length);
      concatenate = cats + textarea;
      console.log(cats);
      $( "#cats" ).html(cats);
  }
    event.preventDefault();
}

function formReset(event) {
    sum = 0;
    avg = 0;
    avg = 0;
    numbers = [];
    strings = [];
    cats = "";
    event.preventDefault();
}
