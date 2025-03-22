console.log("Hello world");

let userEmail;
let userPassword;

document.getElementById("myLogin").onclick = function(){
    userEmail = document.getElementById("myEmail").value;
    userPassword = document.getElementById("myPassword").value;
    console.log("Email: ",userEmail);
    console.log("Password: ",userPassword);
    if(userEmail){
        console.log("Erro")
    }
}