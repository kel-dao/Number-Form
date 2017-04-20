var numbers = [];
var count = 0;
var sum = 0;
var avg = 0;
var strings = [];
var links = "";

function detectGame(event) {
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
      links = links + textarea;
      console.log(links);
      $( "#links" ).html(links);
  }
    event.preventDefault();
}


function formReset(event) {
  sum = 0;
  avg = 0;
  strings = [];
  links = "";
  count = 0;
  numbers = [];
  console.log(sum);
  console.log(avg);  
  event.preventDefault();

}
