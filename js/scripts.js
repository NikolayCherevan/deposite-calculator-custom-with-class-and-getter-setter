

var btnres = document.querySelector (".result");
var namewrite = document.querySelector (".freename");
var resultfinnaly = document.querySelector (".freeresult");


var dollars = 25;
var euro = 30;
var grn = 1;
var course = 0;
var onemonth = 0.4;
var sixmonth = 2.5;
var tweentymonth = 5;
var percent = 0;
var rozrahynok = 0;
var nmonth =0;



btnres.addEventListener ("click", function() {
var formname = document.getElementById("name").value;
namewrite.innerHTML =formname;
if (document.getElementById('r1').checked) {
    course = dollars;
  }
  if (document.getElementById('r2').checked) {
    course = euro;
  }
  if (document.getElementById('r3').checked) {
    course = grn;
  }
  

  if (document.getElementById('r4').checked) {
    nmonth = 1;
    percent = onemonth;
  }
  if (document.getElementById('r5').checked) {
    nmonth = 6;
    percent = sixmonth;
  }
  if (document.getElementById('r6').checked) {
    nmonth = 12;
    percent = tweentymonth;
  }
  if (course = grn) {
      
     percent=10;
  }
  

  var depos = document.querySelector (".sumdeposite").value;
   zaonemonth = depos*(percent/100)/12*nmonth; // delta
   rozrahynok = eval(depos*1 + zaonemonth*1);
    resultfinnaly.innerHTML =rozrahynok;
});


