new Vue({
    el: "#app",
    data: {
        iniciaJogo: false,
        vidaJogador: 100,
        vidaMonstro: 100,
        count: 0,
        logs: []
    },
    watch: {
        vidaJogador(novo, antigo) {
            this.logs.push({id: this.count++, nome: "Monstro", valor: Math.abs(novo - antigo)})
         
        },
        vidaMonstro(novo, antigo) {
            this.logs.push({id: this.count++, nome: "Humano", valor:this.monstro = Math.abs(novo - antigo)})
           
        },

    },

    methods: {
        ataque() {
            
            if((this.vidaJogador > 0 && this.vidaJogador - 8 >= 0) && (this.vidaMonstro > 0 && this.vidaMonstro - 5 >= 0)) {
                this.vidaJogador-=8
                this.vidaMonstro-=5
            }
            else if(this.vidaJogador - 8 <= 0) {
                this.vidaJogador = 0

            }
            else if(this.vidaMonstro - 5 <= 0) {
                this.vidaMonstro = 0

            }
        },
        ataqueEspecial() {
            
            if((this.vidaJogador > 0 && this.vidaJogador - 7 >= 0) && (this.vidaMonstro > 0 && this.vidaMonstro - 12 >= 0)) {
                this.vidaJogador-=7
                this.vidaMonstro-=12
            }
            else if(this.vidaJogador - 7 <= 0) {
                this.vidaJogador = 0

            }
            else if(this.vidaMonstro - 12 <= 0) {
                this.vidaMonstro = 0

            }
        },
        desistir() {
            this.iniciaJogo = false
            this.vidaJogador = 100
            this.vidaMonstro = 100
            this.logs = []
        }
    }


})