const form = document.getElementById('form-contato');
const nomes = [];
const contatos = []

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizaTabela();

});

function adicionalinha(){

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

if (nomes.includes(inputNomeContato.value)) {
    alert(`O Nome: ${inputNomeContato.value} já existe`);
} else {
    nomes.push(inputNomeContato.value);
    contatos.push(inputNumeroTelefone.value);


    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
}

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}