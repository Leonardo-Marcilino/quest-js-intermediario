Validação de Formulário com Mensagens de Erro Dinâmicas

Este projeto implementa uma validação de formulário utilizando JavaScript puro, garantindo que os campos obrigatórios sejam preenchidos corretamente antes do envio.

Funcionalidades

Exibe uma mensagem de erro apenas para os campos vazios.

Adiciona uma borda vermelha nos campos inválidos.

Remove a mensagem de erro e adiciona uma borda verde ao preencher um campo corretamente.

Evita que o formulário seja enviado caso haja campos obrigatórios não preenchidos.

Estrutura do Código

HTML

Cada input deve ter um id único e uma mensagem de erro associada com um data-input correspondente:

<input type="text" id="nome" class="validaInput" placeholder="Nome">
<span class="erro sumir" data-input="nome">Campo obrigatório</span>

<input type="email" id="email" class="validaInput" placeholder="E-mail">
<span class="erro sumir" data-input="email">Campo obrigatório</span>

<button id="btn-enviar-cadastro">Enviar</button>

CSS

.bordaVermelha {
    border: 2px solid red;
}

.bordaVerde {
    border: 2px solid green;
}

.sumir {
    display: none;
}

JavaScript

// Função para exibir erro
function adicionaErro(erro, input){
    erro.forEach(mensagem => {
        if(mensagem.dataset.input === input.id){
            if(input.value.trim() === ''){
                mensagem.classList.remove('sumir');
                input.classList.add('bordaVermelha');
            } else {
                mensagem.classList.add('sumir');
            }
        }
    });
}

// Função para remover erro
function removeErro(erro, input){
    erro.forEach(mensagem => {
        if(mensagem.dataset.input === input.id){
            if(input.value.trim() !== ''){
                mensagem.classList.add('sumir');
                input.classList.remove('bordaVermelha');
            }
        }
    });
}

const btnEnviar = document.querySelector("#btn-enviar-cadastro");
const mensagemErro = document.querySelectorAll(".erro");

// Valida enquanto o usuário digita
for(let input of document.querySelectorAll(".validaInput")){
    input.addEventListener("input", () => {
        if(input.value.trim() === ''){
            input.classList.remove('bordaVerde');
        } else {
            input.classList.add('bordaVerde');
            removeErro(mensagemErro, input);
        }
    });
}

// Valida ao clicar no botão de envio
btnEnviar.addEventListener("click", () => {
    let camposValidos = true;

    for(let input of document.querySelectorAll(".validaInput")){
        if(input.value.trim() === ''){
            adicionaErro(mensagemErro, input);
            camposValidos = false;
        } else {
            removeErro(mensagemErro, input);
        }
    }

    if (!camposValidos) {
        return false;
    }

    alert("Formulário enviado com sucesso!");
});



