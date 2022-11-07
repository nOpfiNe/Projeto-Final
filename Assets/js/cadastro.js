let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false


let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false


let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red; font-size: 11px')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
  
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: D6DCD8')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: D6DCD8')
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 3){
    labelUsuario.setAttribute('style', 'color: red; font-size: 11px')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 4 caracteres'
    usuario.setAttribute('style', 'border-color: red')
  
    validUsuario= false
  } else {
    labelUsuario.setAttribute('style', 'color: D6DCD8')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: D6DCD8')
    validUsuario = true
  }
})


senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red; font-size: 11px')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: D6DCD8')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: D6DCD8')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red; font-size: 11px')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *Senha errada'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: D6DCD8')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: D6DCD8')
    validConfirmSenha = true
  }
})

function cadastar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    
  } else{
    
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})



