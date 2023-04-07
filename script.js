let login= document.querySelector(".login")
let cadastro= document.querySelector(".cadastro")

function expandLogin(){
    login.style.width= '80%'
    cadastro.style.width= '20%'
}

function expandCadastro(){
    login.style.width= '20%'
    cadastro.style.width= '80%'
}