console.log("Hello world");

let userEmail;
let userPassword;

document.getElementById("myLogin").onclick =  function(){
    userEmail = document.getElementById("myEmail").value;
    userPassword = document.getElementById("myPassword").value;
    console.log("Email: ",userEmail);
    console.log("Password: ",userPassword);
}

function guacaPro(){
    document.getElementById("textPrice").innerText = "Cursos a partir de 49,99 e muito mais"
}

function guacaBasic(){
    document.getElementById("textPrice").innerText = "Todos os cursos a partir de R$ 39,99"
}