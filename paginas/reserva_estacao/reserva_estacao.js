function realizar_Reserva(){
    var data = document.getElementById("datacheckin").value;
    var check_In = document.getElementById("horacheckin").value;
    var check_Out = document.getElementById("horacheckout").value;
    var e = document.getElementById("liestacao");
    var estacao = e.options[e.selectedIndex].text;

    alert("Data do check-in: " + data + "\nHorário de check-in: " + check_In + "\nHorário de checkout: " + check_Out + "\nEstação: " + estacao);
}