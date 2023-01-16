function reserva() {
    // Pegar valores dos campos de data de check-in e check-out
    var checkIn = document.getElementById('check_in').value
    var checkOut = document.getElementById('check_out').value
    var qtdePessoas = document.getElementById('quantidade_pessoas').value
    var tipoQuarto = document.querySelector(
        'input[name="quarto"]:checked'
    ).value
    var valorQuarto = document.getElementById('valor_quarto').innerHTML
    var valorTotal = valorQuarto * qtdePessoas

    // Validar se as datas estão preenchidas e se a quantidade de pessoas é válida
    if (checkIn === '' || checkOut === '') {
        alert('Por favor, preencha as datas de check-in e check-out.')
    } else if (qtdePessoas <= 0 || qtdePessoas > 4) {
        alert('Por favor, insira uma quantidade válida de pessoas (de 1 a 4).')
    } else {
        // Armazenar as informações de reserva no localStorage
        localStorage.setItem('check_in', checkIn)
        localStorage.setItem('check_out', checkOut)
        localStorage.setItem('qtde_pessoas', qtdePessoas)
        localStorage.setItem('tipo_quarto', tipoQuarto)
        localStorage.setItem('valor_total', valorTotal)

        // Exibir as informações de reserva na área "Resumo da Reserva"
        document.getElementById('check_in_resumo').innerHTML = checkIn
        document.getElementById('check_out_resumo').innerHTML = checkOut
        document.getElementById('qtde_pessoas_resumo').innerHTML = qtdePessoas
        document.getElementById('tipo_quarto_resumo').innerHTML = tipoQuarto
        document.getElementById('valor_total_resumo').innerHTML = valorTotal
    }
}

/* Note que, é necessário ter um elemento HTML com id 'valor_quarto' para armazenar o valor do quarto, e os elementos HTMLs com ids 'check_in_resumo', 'check_out_resumo', 'qtde_pessoas_resumo', 'tipo_quarto_resumo */


/////////////////////////


// Função para exibir a modal de serviços adicionais
function mostrarModal() {
    document.getElementById('modal').style.display = 'block'
}

// Função para fechar a modal de serviços adicionais
function fecharModal() {
    document.getElementById('modal').style.display = 'none'
}

// Função para adicionar serviços adicionais
function adicionarServicos() {
    var servicosAdicionais = document.getElementsByName('servico')
    var servicosEscolhidos = []
    var valorTotalServicos = 0

    // Percorrer os serviços adicionais e adicionar os escolhidos à array
    for (var i = 0; i < servicosAdicionais.length; i++) {
        if (servicosAdicionais[i].checked) {
            servicosEscolhidos.push(servicosAdicionais[i].value)
            valorTotalServicos += parseFloat(
                servicosAdicionais[i].dataset.valor
            )
        }
    }

    // Armazenar os serviços escolhidos no localStorage
    localStorage.setItem('servicos_escolhidos', servicosEscolhidos)
    localStorage.setItem('valor_servicos', valorTotalServicos)

    // Atualizar o valor total da reserva com o valor dos serviços adicionais
    var valorTotal =
        parseFloat(localStorage.getItem('valor_total')) + valorTotalServicos
    localStorage.setItem('valor_total', valorTotal)

    // Exibir os serviços adicionais escolhidos e seus valores na área "Resumo da Reserva"
    var servicosHTML = ''
    for (var i = 0; i < servicosEscolhidos.length; i++) {
        servicosHTML += '<li>' + servicosEscolhidos[i] + '</li>'
    }
    document.getElementById('servicos_escolhidos_resumo').innerHTML =
        servicosHTML
    document.getElementById('valor_servicos_resumo').innerHTML =
        valorTotalServicos
    document.getElementById('valor_total_resumo').innerHTML = valorTotal

    // Fechar a modal
    fecharModal()
}


//////////////////////////////////////////


// Função para exibir a modal de confirmação da reserva
function mostrarModalConfirmacao() {
    // Pegar as informações da reserva do localStorage
    var checkIn = localStorage.getItem("check_in");
    var checkOut = localStorage.getItem("check_out");
    var qtdePessoas = localStorage.getItem("qtde_pessoas");
    var tipoQuarto = localStorage.getItem("tipo_quarto");
    var valorTotal = localStorage.getItem("valor_total");
    var servicosEscolhidos = localStorage.getItem("servicos_escolhidos").split(',');
    var valorServicos = localStorage.getItem("valor_servicos");

    // Atualizar as informações da modal de confirmação
    document.getElementById("tipo_quarto_confirmacao").innerHTML = tipoQuarto;
    document.getElementById("check_in_confirmacao").innerHTML = checkIn;
    document.getElementById("check_out_confirmacao").innerHTML = checkOut;
    document.getElementById("qtde_pessoas_confirmacao").innerHTML = qtdePessoas;
    document.getElementById("valor_total_confirmacao").innerHTML = valorTotal;
    var servicosHTML = "";
    for (var i = 0; i < servicosEscolhidos.length; i++) {
        servicosHTML += "<li>" + servicosEscolhidos[i] + "</li>";
    }
    document.getElementById("servicos_escolhidos_confirmacao").innerHTML = servicosHTML;
    document.getElementById("valor_servicos_confirmacao").innerHTML = valorServicos;
    
    // Exibir a modal
    document.getElementById("modal_confirmacao").style.display = "block";
}

////////////////////////////////////////


// Função para carregar as informações da reserva
function carregarInformacoes() {
    // Verificar se há informações de reserva no localStorage
    if (localStorage.getItem("check_in") !== null) {
        // Pegar as informações da reserva do localStorage
        var checkIn = localStorage.getItem("check_in");
        var checkOut = localStorage.getItem("check_out");
        var qtdePessoas = localStorage.getItem("qtde_pessoas");
        var tipoQuarto = localStorage.getItem("tipo_quarto");
        var valorTotal = localStorage.getItem("valor_total");
        var servicosEscolhidos = localStorage.getItem("servicos_escolhidos").split(',');
        var valorServicos = localStorage.getItem("valor_servicos");

        // Preencher as informações da reserva na área "Resumo da Reserva"
        document.getElementById("check_in_resumo").innerHTML = checkIn;
        document.getElementById("check_out_resumo").innerHTML = checkOut;
        document.getElementById("qtde_pessoas_resumo").innerHTML = qtdePessoas;
        document.getElementById("tipo_quarto_resumo").innerHTML = tipo
