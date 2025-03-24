console.log("Hello world");

let userEmail;
let userPassword;

function loginAccount(){
    document.getElementById("myLogin").addEventListener('click', function(){
        userEmail = document.getElementById("myEmail").value;
        userPassword = document.getElementById("myPassword").value;
        console.log("Email: ",userEmail);
        console.log("Password: ",userPassword);
        if(userEmail == "" || userPassword == ""){
            window.alert("Por favor insira seu e-mail ou senha");
        }else{
            
        }
        }
    )
}
let signGuacaPro = false;
let signGuacaBasic = true;

function guacaPro(){
    document.getElementById("textPrice").innerText = "Promocao Pro";
    document.getElementById('coursePrice').innerText = "R$ 49,99";
    document.getElementById('pro').style.display = "flex";
    document.getElementById('basic').style.display = "none";
    document.getElementById('previousPrice').innerText = "De R$ 699,88 por 12x sem juros de:";
    signGuacaPro = true;
    signGuacaBasic = false;
}

function guacaBasic(){
    document.getElementById("textPrice").innerText = "Promocao Basic";
    document.getElementById('coursePrice').innerText = "R$ 39,99";
    document.getElementById('pro').style.display = "none";
    document.getElementById('basic').style.display = "flex";
    document.getElementById('previousPrice').innerText = "De R$ 579,88 por 12x sem juros de:";
    signGuacaBasic = true;
    signGuacaPro = false;
}
function signCourse(){
    document.getElementById('sign').addEventListener('click', function(){
        if(signGuacaBasic==true){
            console.log("Assinar GuacaBasic");
        }else{
            console.log("Assinar GuacaPro");
        }
    })
}

let senha = document.getElementById('myPassword');

function mudarSenha(){
    senha.type = senha.type === "password" ? "text" : "password";
    if(senha.type == "password"){
        document.getElementById('open').style.display = "flex";
        document.getElementById('close').style.display = "none";
    }else{
        document.getElementById('close').style.display = "flex";
        document.getElementById('open').style.display = "none";

    }
}