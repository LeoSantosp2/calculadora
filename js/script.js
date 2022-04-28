function Calculadora(){
    this.display = document.getElementById('tela')

    this.iniciar = () =>{
        this.cliqueBotoes()
        this.pressioneEnter()
    }

    this.tela = valor =>{
        this.display.value += valor
    }

    this.calcular = () =>{
        let conta = this.display.value

        try{
            conta = eval(conta)

            if(!conta){
                alert('Conta inválida')
                return
            }

            this.display.value = String(conta)

        } catch{
            alert('Conta inválida')
            return
        }
    }

    this.cliqueBotoes = () =>{
        document.addEventListener('click', e =>{
            const event = e.target

            if(event.classList.contains('btn')){
                this.tela(event.innerText)
            }

            if(event.classList.contains('btn-clear')){
                this.display.value = ''
            }

            if(event.classList.contains('btn-del')){
                this.display.value = this.display.value.slice(0, -1)
            }

            if(event.classList.contains('btn-eq')){
                this.calcular()
            }
        })
    }

    this.pressioneEnter = () =>{
        document.addEventListener('keyup', e =>{
            if(e.keyCode === 13){
                this.calcular()
            }
        })
    }
}

const calc = new Calculadora()
calc.iniciar()