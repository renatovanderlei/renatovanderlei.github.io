//Reserva rápida
function checkin_Rapido(){
    var today = new Date();
    var datanow = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var timenow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var checkoutrapido = document.getElementById("periodoRapido").value;
    var e = document.getElementById("estacaorapido");
    var estacaorapido = e.options[e.selectedIndex].text;
    
    alert("Data do check-in: " + datanow + "\nHorário de check-in: " + timenow + "\nHorário de checkout: " + checkoutrapido + "\nEstação: " + estacaorapido);
}

/*
Definindo timer TEMPO DE USO - botão checkout
*/

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("tempoUso").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("tempoUso").innerHTML = "EXPIRED";
  }
}, 1000);

/*
Definindo timer TEMPO RESTANTE - botão checkout
*/

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("tempoRestante").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("tempoRestante").innerHTML = "EXPIRED";
  }
}, 1000);