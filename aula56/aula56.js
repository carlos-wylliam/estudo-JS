// Fabric Functions

function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {
            return `${nome} ${sobrenome}`
        },
        fala: function (assunto) {
            return `${nome} está ${assunto}`
        },
        altura,
        peso,
        //getter
        get imc () {
            const indice = this.peso / (this.altura ** 2 )
            return indice.toFixed(2)  
        }
    }
}

const p1 = criaPessoa('Carlos', 'Wylliam', 1.7, 64.4)
console.log(p1.imc)
console.log(p1.nomeCompleto)