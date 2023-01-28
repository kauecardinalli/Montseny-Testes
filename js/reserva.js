//// Acomodações ////

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
   resumoValor.hidden = false
   localStorage.setItem('Acomodação', tipoChale)
   localStorage.setItem('Valor da diária', valorChale)
   atualizaInfos()
}

////////// DATAS ////////////

const dataDefault = new Date().toISOString().split('T')[0]
const dataFormatada = new Date().toLocaleDateString('pt-BR')
document.getElementById('check_in').setAttribute('min', dataDefault)
document.getElementById('check_in').value = dataDefault
document.querySelector('#resumoCheckIn').textContent = dataFormatada

function dataSelecionadaIn(data) {
   const dataFormatadaIn = data.value.split('-').reverse().join('-')
   document.querySelector('#resumoCheckIn').innerText = dataFormatadaIn
   const dataOut = document.querySelector('#check_in').value
   document.querySelector('#check_out').setAttribute('min', dataOut)
   localStorage.setItem('Data Check-in', dataFormatadaIn)
   atualizaInfos()
}

function dataSelecionadaOut(data) {
   let dataFormatadaOut = data.value.split('-').reverse().join('-')
   document.querySelector('#resumoCheckOut').innerText = dataFormatadaOut
   localStorage.setItem('Data Check-out', dataFormatadaOut)
   atualizaInfos()
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
   atualizaInfos()
}

//// Serviços ////

let valorLocalServicos = 0

function checkServicos() {
   let total = 0
   const checkboxes = document.querySelectorAll('input[type="checkbox"]')
   checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
         total += parseFloat(checkbox.value)
      }
   })

   let totalServicos = document.getElementById('totalServicos')
   valorLocalServicos = total
   localStorage.setItem('Valor Serviços', total)
   totalServicos.innerText = `R$${total},00`
}

const btnInserir = document.getElementById('inserir')
btnInserir.addEventListener('click', () => {
   console.log(valorLocalServicos)
   atualizaInfos()
})

//// Previewer ////

const resumoValor = document.querySelector('#resumoValor')

function atualizaInfos() {
   const checkIn = document.getElementById('check_in').value
   const checkOut = document.getElementById('check_out').value
   const valorSalvo = Number(localStorage.getItem('Valor da diária'))
   const totalDias = calculaDatas(checkIn, checkOut)
   const valorTotal = valorSalvo * totalDias + valorLocalServicos

   resumoValor.innerText = valorTotal.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
   })
   localStorage.setItem('Valor total', valorTotal)
}
