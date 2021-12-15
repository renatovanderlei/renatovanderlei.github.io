function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if(email.value == "admin@admin.com" && senha.value == "admin"){
        localStorage.setItem("acesso", true);

        window.location.href = "home.html"
    }else{
        alert("Usuario ou Senha invalidos!");
    }
}