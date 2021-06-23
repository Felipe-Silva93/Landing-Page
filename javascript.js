let nome = window.document.getElementById("exampleFormControlInput1")
let email = document.querySelector("#exampleFormControlInput2")
let assunto = document.querySelector("#exampleFormControlTextarea3")
let nomeOK=false
let emailOK=false
let assuntoOK=false


nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txtNome= document.querySelector("#txtNome")
    if(nome.value.length<3){
        txtNome.innerHTML="Nome Inválido"
        txtNome.style.color="red"
    }else{
        txtNome.innerHTML="Nome valido"
        txtNome.style.color="green"
        nomeOK=true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

   if(email.value.indexOf("@")== -1 || email.value.indexOf(".")== -1){

        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
   }else{
    txtEmail.innerHTML = "E-mail válido"
    txtEmail.style.color = "green"
    emailOK=true
   }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length>=100){
      txtAssunto.innerHTML = "Texto excede o permitido, digite nomaximo 100 caracteres"  
      txtAssunto.style.color="red"
      txtAssunto.style.display="block"
    }else{
        txtAssunto.style.display="none"
    }   assuntoOK=true
}

function enviar(){
    if(nomeOK==true && emailOK==true && assuntoOK==true){
        alert ("formulario enviado com sucesso")
    }else{
        alert ("Preencha o formulário corretamente antes de enviar")
    }
}
