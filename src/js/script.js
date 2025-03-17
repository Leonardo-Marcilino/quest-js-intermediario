// Função para adicionar erro ao campo
function adicionaErro(erro, input) {
    erro.forEach(mensagem => {
        /* 
            Acesso a lista de mensagem e valido a referencia de cada um a partir do data-input
            para direcionar a mensagem de erro ao campo correto do input correto
        */
        if (mensagem.dataset.input === input.id) { 
            // Verifica se o campo está vazio ou não
            if (input.value.trim() === '') {
                mensagem.classList.remove('sumir'); // Mostra a mensagem de erro
                input.classList.add('bordaVermelha'); // Adiciona borda vermelha
            } else {
                mensagem.classList.add('sumir'); // Esconde a mensagem de erro se não estiver vazio
            }
        }
    });
}

// Função para remover erro do campo
function removeErro(erro, input) {
    erro.forEach(mensagem => {
        /* 
            Acesso a lista de mensagem e valido a referencia de cada um a partir do data-input
            para direcionar a mensagem de erro ao campo correto do input correto
        */
        if (mensagem.dataset.input === input.id) {
            // Verifica se o campo está vazio ou não
            if (input.value.trim() != '') {
                mensagem.classList.add('sumir'); // Esconde a mensagem de erro
                input.classList.remove('bordaVermelha'); // Remove a borda vermelha
            }
        }

    });
}

const btnEnviar = document.querySelector("#btn-enviar-cadastro"); // Selecione o botão de envio
const mensagemErro = document.querySelectorAll(".erro"); // Mensagens de erro 'campo obrigatório'

// Validação enquanto digita (input)
for (let input of document.querySelectorAll(".validaInput")) {
    input.addEventListener("input", () => {
        if (input.value.trim() === '') { // Se o campo estiver vazio
            input.classList.remove('bordaVerde');  // Remove a borda verde
        } else {
            input.classList.add('bordaVerde'); // Adiciona borda verde
            removeErro(mensagemErro, input); // Remove mensagem de erro
        }
    })
}
// Adiciona o evento 'click' no botão de envio
btnEnviar.addEventListener("click", () => {

    // Valida cada input
    for (let input of document.querySelectorAll(".validaInput")) {

        if (input.value.trim() === '') { // Se o campo estiver vazio
            adicionaErro(mensagemErro, input);  // Adiciona erro
            camposValidos = false;
        } else {
            removeErro(mensagemErro, input);  // Remove mensagem de erro
        }
    }
})





// let input = document.querySelectorAll(".validaInput").forEach(input, ()=>{
//     input.addEventListener('input', ()=>{
//         if(inputsCadastro.value == ''){
//             validaInput.remove('bordaVerde');
//         }else{
//             validaInput.add('bordaVerde');
//         }
//     })
// })

// for(let inputsCadastro of document.querySelectorAll(".validaInput")){
//     const validaInput = inputsCadastro.classList
//     inputsCadastro.addEventListener('input', ()=>{
//         if(inputsCadastro.value == ''){
//             validaInput.remove('bordaVerde');
//         }else{
//             validaInput.add('bordaVerde');
//         }
//     })
//     console.log(validaInput)
//     console.log(inputsCadastro)
// }