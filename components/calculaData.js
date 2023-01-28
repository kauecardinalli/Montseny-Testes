export default {
   data() {
      return {
         acomodacao: {
            opcao1: { nome: 'Chalé Ofurô', valor: 880 },
            opcao2: { nome: 'Chalé Master', valor: 800 },
            opcao3: { nome: 'Chalé Luxo Família', valor: 750 },
         },
         selectedOption: null,
         checkIn: new Date().toISOString().split('T')[0],
         checkOut: null,
         qtdPessoas: null,
      }
   },
   computed: {
      minCheckIn() {
         return this.checkIn
      },
      minCheckOut() {
         return this.checkIn
      },
      selectedOptionName() {
         if (!this.selectedOption) return null
         return this.acomodacao[
            Object.keys(this.acomodacao)[this.selectedOption]
         ].nome
      },
      selectedOptionValue() {
         if (!this.selectedOption) return null
         return this.acomodacao[
            Object.keys(this.acomodacao)[this.selectedOption]
         ].valor
      },
      totalValue() {
         if (!this.checkIn || !this.checkOut || !this.selectedOptionValue)
            return null
         const totalDias = this.calculaDatas(this.checkIn, this.checkOut)
         return (totalDias * this.selectedOptionValue).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
         })
      },
   },
   methods: {
      selectOption(index) {
         this.selectedOption = index
         localStorage.setItem('Acomodação', this.selectedOptionName)
         localStorage.setItem('Valor da diária', this.selectedOptionValue)
      },
      selectCheckIn() {
         const dataFormatadaIn = this.checkIn.split('-').reverse().join('-')
         localStorage.setItem('Data Check-in', dataFormatadaIn)
      },
      selectCheckOut() {
         const dataFormatadaOut = this.checkOut.split('-').reverse().join('-')
         localStorage.setItem('Data Check-out', dataFormatadaOut)
      },
      selectQtdPessoas() {
         localStorage.setItem('Número de hóspedes', this.qtdPessoas)
      },
      calculaDatas(checkIn, checkOut) {
         const checkInData = new Date(checkIn)
         const checkOutData = new Date(checkOut)
         const difMs = checkOutData - checkInData
         const difDias = difMs / (1000 * 60 * 60 * 24)
         return difDias
      },
   },
}
