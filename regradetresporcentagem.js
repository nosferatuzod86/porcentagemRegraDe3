   function calcularPorcentagem() {
    var txttotal = window.document.getElementById('txtvaltotal')
    var valtotal =Number(txttotal.value)
    var txtporcentagem = window.document.getElementById('txtvalporcentagem')
    var porcentagem =Number(txtporcentagem.value)
    var res = window.document.getElementById('res')
        
    var valfinal = ((valtotal * porcentagem)/100)

    res.innerHTML = `<p>${porcentagem} por cento de ${valtotal} reais é igual à ${valfinal} reais.</p>`
}
