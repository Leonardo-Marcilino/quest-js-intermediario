Validação de Formulário

Este projeto implementa a validação de um formulário HTML com mensagens de erro dinâmicas, garantindo que os campos obrigatórios sejam preenchidos corretamente antes do envio.

📌 Funcionalidades

Exibe mensagens de erro para campos vazios.

Adiciona uma borda vermelha em inputs inválidos.

Remove o erro e adiciona uma borda verde quando o campo é preenchido corretamente.

Impede o envio do formulário caso existam campos obrigatórios não preenchidos.

🛠️ Como funciona

O script utiliza JavaScript puro para manipular os elementos do DOM e adicionar mensagens de erro aos campos obrigatórios.

Validação em tempo real

Cada input recebe um evento input, que remove a mensagem de erro e adiciona uma borda verde quando o usuário digita algo.

Validação ao clicar no botão de envio

O script percorre todos os inputs obrigatórios.

Se o campo estiver vazio, exibe a mensagem de erro e adiciona a borda vermelha.

Se o campo estiver preenchido, remove a mensagem de erro e aplica a borda verde.

📜 Tecnologias utilizadas

HTML5

CSS3

JavaScript (DOM Manipulation)
