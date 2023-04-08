let login= document.querySelector(".login")
let cadastro= document.querySelector(".cadastro")
let tam
let input = document.querySelectorAll(".input")
let input2 = document.querySelectorAll(".input2")

// expande a tela de login quando em foco
// e diminui a tela de cadastro
function expandLogin(){
    login.style.width= '80%'
    login.style.opacity= '1'
    cadastro.style.width= '20%'
    cadastro.style.opacity= '0.3'
}

// expande a tela de cadastro quando em foco
// e diminui a tela de login
function expandCadastro(){
    login.style.width= '20%'
    login.style.opacity= '0.3'
    cadastro.style.width= '80%'
    cadastro.style.opacity= '1'
}

// checa tamanho da tela para no mobile os efeitos nao funcionarem
function checaTam(){
    tam = window.innerWidth

    if(tam < 1000){
        for (let i = 0; i < input.length; i++) {
            input[i].removeAttribute("onfocus")
        }
        for (let i = 0; i < input2.length; i++) {
            input2[i].removeAttribute("onfocus")
        }
        login.style.width= '50%'
        login.style.opacity= '1'
        cadastro.style.width= '50%'
        cadastro.style.opacity= '1'
    }else{
        for (let i = 0; i < input.length; i++) {
            input[i].setAttribute("onfocus", 'expandLogin()')
        }
        for (let i = 0; i < input2.length; i++) {
            input2[i].setAttribute("onfocus", 'expandCadastro()')
        }
    }
}