# Fabric Functions

```javascript
function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala: function (assunto) {
            return `${nome} está ${assunto}`
        },
        altura,
        peso,
        get imc () {
            const indice = this.peso / (this.altura ** 2 )
            return indice.toFixed(2)  
        }
    }
}

const p1 = criaPessoa('Carlos', 'Wylliam', 1.7, 64.4)
console.log(p1.imc)

//retorno dessa função é isso daqui
{ nome: 'Carlos', sobrenome: 'Wylliam' }

```