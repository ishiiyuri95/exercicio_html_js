document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o envio padrão do formulário

    // Obter os valores dos campos
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    // Validar se campoB é maior que campoA
    if (campoB > campoA) {
        alert("O formulário é válido.");
    } else {
        alert("O formulário é inválido. O número B deve ser maior que o número A.");
    }
});