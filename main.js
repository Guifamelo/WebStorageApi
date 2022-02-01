//estudando localStorage e sessionStorage. local fica no cache e retoma se fechar a pagina, sesh somente na sesao, se fechar zera. ex abaixo mix.
const btn = document.getElementById('btn')
btn.addEventListener('click',defineUser)
const btn2 = document.getElementById('btn2')
btn2.addEventListener('click',mostraNome)

let frase = document.getElementById('p1')
let frase2 = document.getElementById('p2')

function defineUser() {
    let nome = prompt('Olá, qual seu nome? ')

    sessionStorage.setItem('nome', nome)
    frase.textContent += `${nome}`
    
}
if (!sessionStorage.getItem('nome')) {
    defineUser()
} else {
    let nomeGuardado = sessionStorage.getItem('nome')
    frase.textContent = 'Welcome back'+ nomeGuardado
        
}
function mostraNome(){
    let nomeGuardado = localStorage.getItem('nome')
    frase2.textContent += nomeGuardado
}


