var logado = false;
var mostraFormReserva = false;

if(localStorage.getItem("acesso") == "true"){
    logado = true;
}

if(logado != true){
    alert("Voce não está autenticado!");
    window.location.href="index.html";
}

function formReserva(){
    mostraFormReserva = !mostraFormReserva;
    var form = document.getElementById("formReserva")

    if(mostraFormReserva){
        form.style.display = 'block'
    }else{
        form.style.display = 'none'
    }

    
}