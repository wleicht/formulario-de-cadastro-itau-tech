const URL = "http://viacep.com.br/ws/"
const formato = "/json"
function verifica() {
    var cep = document.getElementById("Cep").value;
    document.getElementById("btn1").disabled = true
    fetch(URL + cep + formato)
        .then(res => res.json())
        .then(res => preenche(res))
}
function preenche(res) {
    if (res.uf == undefined) {
        alert("por favor, indique um Cep válido.");
        document.getElementById("Cep").value = ""
        document.getElementById("btn1").disabled = false
    }
    else {
        document.getElementById("estado").value = res.uf;
        document.getElementById("cidade").value = res.localidade;
        document.getElementById("bairro").value = res.bairro;
        document.getElementById("endereco").value = res.logradouro;
        document.getElementById("btn1").disabled = false
    }
}