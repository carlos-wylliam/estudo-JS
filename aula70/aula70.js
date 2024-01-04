const pessoa1 = new Object();
pessoa1.nome = 'Carlos'
pessoa1.sobrenome = 'Wylliam'
pessoa1.idade = 20
pessoa1.falarNome = function () {
    return (`${this.nome} está falando seu nome`)
}
pessoa1.getDataNascimento = function () {
    const data = new Date()
    return data.getFullYear() - this.idade
}

console.log(pessoa1.getDataNascimento())