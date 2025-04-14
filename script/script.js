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
function abrirMenu(){
    document.getElementById('menuLateral').classList.toggle('active');
}
let signGuacaPro = false;
let signGuacaBasic = true;

function guacaPro(){
    let card = document.getElementById('card');
    let button = document.getElementById('guacaPro');
    document.getElementById("textPrice").innerText = "Promoção Pro";
    document.getElementById('coursePrice').innerText = "R$ 49,99";
    document.getElementById('pro').style.display = "flex";
    document.getElementById('basic').style.display = "none";
    document.getElementById('previousPrice').innerHTML = "De R$699,88 por 12x sem juros de:";
    button.style.background = "#3B7302";
    button.style.color = "whitesmoke";
    document.getElementById('guacaBasic').style = "none";
    card.innerText = "Mais beneficios";
    signGuacaPro = true;
    signGuacaBasic = false;
}

function guacaBasic(){
    let card = document.getElementById('card');
    let button = document.getElementById('guacaBasic');
    document.getElementById("textPrice").innerText = "Promoção Basic";
    document.getElementById('coursePrice').innerText = "R$ 39,99";
    document.getElementById('pro').style.display = "none";
    document.getElementById('basic').style.display = "flex";
    document.getElementById('previousPrice').innerHTML = "De R$579,88 por 12x sem juros de:";
    document.getElementById('guacaBasic').style.background = "#3B7302";
    button.style.color = "whitesmoke"
    document.getElementById('guacaPro').style = "none";
    card.innerText = "Mais escolhido";
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

class Conteudo{
    constructor(title, video, titulo_video){
        this.title = title;
        this.video = video;
        this.titulo_video = titulo_video;
    }

    
}