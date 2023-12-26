function Pessoa(nome, sobrenome) {
    //Atributos ou metodos privados
    const id = 12123
    const metodoPrivado = () => {
        
    }
    //Atributos e Metodos publicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log(this.nome + ': sou um metodo')
    }
}

const p1 = new Pessoa('Carlos', 'Wylliam')
console.log(p1.nome)
console.log(p1.sobrenome)
p1.metodo()