const acomodacao = {
   opcao1: { nome: 'Chalé Ofurô', valor: 880 },
   opcao2: { nome: 'Chalé Master', valor: 800 },
   opcao3: { nome: 'Chalé Luxo Família', valor: 750 },
}

const opcao = Object.keys(acomodacao)

function selecionado(radio) {
   let tipoChale = acomodacao[opcao[radio.value]].nome
   let valorChale = acomodacao[opcao[radio.value]].valor
   document.querySelector('#resumoChale').innerText = tipoChale
   document.querySelector('#resumoValor').innerText = `R$ ${valorChale.toFixed(
      2
   )}`

   localStorage.setItem('Acomodação', tipoChale)
   localStorage.setItem('Valor da diária', valorChale)

   calculaDatas()
   const totalDias = calculaDatas(checkIn, checkOut)
   const valorTotal = totalDias * valorChale
   document.querySelector('#resumoValor').innerText = `R$${valorTotal.toFixed(
      2
   )}`
   localStorage.setItem('Valor total', valorTotal)
}

////////// DATAS ////////////

const dataPadrao = new Date().toISOString().split('T')[0]
document.getElementById('check_in').setAttribute('min', dataPadrao)
document.getElementById('check_in').value = dataPadrao
document.querySelector('#resumoCheckIn').textContent = dataPadrao

function dataSelecionadaIn(data) {
   const dataFormatadaIn = data.value.split('-').reverse().join('-')
   document.querySelector('#resumoCheckIn').innerText = dataFormatadaIn
   const dataOut = document.querySelector('#check_in').value
   document.querySelector('#check_out').setAttribute('min', dataOut)
   localStorage.setItem('Data Check-in', dataFormatadaIn)
   calculaDatas()
}

function dataSelecionadaOut(data) {
   let dataFormatadaOut = data.value.split('-').reverse().join('-')
   document.querySelector('#resumoCheckOut').innerText = dataFormatadaOut
   localStorage.setItem('Data Check-out', dataFormatadaOut)
   calculaDatas()
}

function calculaDatas(checkIn, checkOut) {
   const checkInData = new Date(checkIn)
   const checkOutData = new Date(checkOut)

   const difMs = checkOutData - checkInData
   const difDias = difMs / (1000 * 60 * 60 * 24)
   return difDias
}

const checkIn = localStorage
   .getItem('Data Check-in')
   .split('-')
   .reverse()
   .join('-')

const checkOut = localStorage
   .getItem('Data Check-out')
   .split('-')
   .reverse()
   .join('-')

///// Hóspedes /////

function qtdPessoas(qtd) {
   let hospedes = qtd.value

   document.querySelector('#resumoQtdPessoas').innerText = hospedes
   localStorage.setItem('Número de hóspedes', hospedes)
}

window.addEventListener('Data Check-out', function (e) {
   calculaDatas()
})



///////////////////////////

const acomodacao = {
   opcao1: { nome: 'Chalé Ofurô', valor: 880 },
   opcao2: { nome: 'Chalé Master', valor: 800 },
   opcao3: { nome: 'Chalé Luxo Família', valor: 750 },
}

const opcao = Object.keys(acomodacao)

function selecionado(radio) {
   const tipoChale = acomodacao[opcao[radio.value]].nome
   const valorChale = acomodacao[opcao[radio.value]].valor
   document.querySelector('#resumoChale').innerText = tipoChale
   document.querySelector('#resumoValor').innerText = `R$ ${valorChale.toFixed(
      2
   )}`

   localStorage.setItem('Acomodação', tipoChale)
   localStorage.setItem('Valor da diária', valorChale)

   const checkIn = document.getElementById('check_in').value
   console.log(checkIn)
   const checkOut = document.getElementById('check_out').value
   console.log(checkOut)

   const totalDias = calculaDatas(checkIn, checkOut)
   const valorTotal = totalDias * valorChale
   document.querySelector('#resumoValor').innerText = `R$ ${valorTotal.toFixed(
      2
   )}`
   localStorage.setItem('Valor total', valorTotal)
}

////////// DATAS ////////////

const dataPadrao = new Date().toISOString().split('T')[0]
document.getElementById('check_in').setAttribute('min', dataPadrao)
document.getElementById('check_in').value = dataPadrao
document.querySelector('#resumoCheckIn').textContent = dataPadrao

function dataSelecionadaIn(data) {
   const dataFormatadaIn = data.value.split('-').reverse().join('-')
   document.querySelector('#resumoCheckIn').innerText = dataFormatadaIn
   const dataOut = document.querySelector('#check_in').value
   document.querySelector('#check_out').setAttribute('min', dataOut)
   localStorage.setItem('Data Check-in', dataFormatadaIn)
}

function dataSelecionadaOut(data) {
   let dataFormatadaOut = data.value.split('-').reverse().join('-')
   document.querySelector('#resumoCheckOut').innerText = dataFormatadaOut
   localStorage.setItem('Data Check-out', dataFormatadaOut)
}

function calculaDatas(checkIn, checkOut) {
   const checkInData = new Date(checkIn)
   const checkOutData = new Date(checkOut)

   const difMs = checkOutData - checkInData
   const difDias = difMs / (1000 * 60 * 60 * 24)
   return difDias
}

///// Hóspedes /////

function qtdPessoas(qtd) {
   let hospedes = qtd.value

   document.querySelector('#resumoQtdPessoas').innerText = hospedes
   localStorage.setItem('Número de hóspedes', hospedes)
}
