let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let telefone = document.querySelector("#telefone");
let mensagem = document.querySelector("#mensagem");

const botao = document.querySelector("#botao");

botao.addEventListener('click', function(evento){
    evento.preventDefault();
    if (nome.value=== undefined || 
        nome.value=== null ||
        nome.value.trim()=== "" || 
        nome.value.length<0){
        nome.focus();
        alert('Digite um nome válido.')
        return false;
        }else if 
            (email.value=== undefined || 
             email.value=== null ||
             email.value.trim()=== "" || 
             email.value.indexOf('@')===-1){
             email.focus();
             alert('Digite um e-mail válido.')
             return false;
        } else if
            (telefone.value=== undefined || 
            telefone.value=== null ||
            telefone.value.trim()=== "" || 
            telefone.value.length<11){
            telefone.focus();
            alert('Digite um número válido.')
            return false;         
    }else if
            (mensagem.value=== undefined ||
            mensagem.value=== null ||
            mensagem.value.trim()=== "" ||
            mensagem.value.length<=5){
            mensagem.focus();
            alert('Digite sua mensagem aqui. ')
            return false;
            }
    document.querySelector('form').submit()
    alert('Obrigada por entrar em contato! Vamos analisar sua mensagem e lhe retornar assim que possível.')
})

