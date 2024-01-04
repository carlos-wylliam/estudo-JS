// Copiando objeto, alterando objeto sem apontar para o mesmo endereço, adicionando propriedades no objeto

const produto = {nome: 'produto base', preco: 1.8}
const livro = {...produto, material: 'Plastico'}
const livro2 = Object.assign({}, produto, {material: 'Porcelana'})

livro.nome = 'Livro'
livro.preco = 2.7

console.log(produto)
console.log(livro)
console.log(livro2)
console.log(Object.keys(produto)) //mostra um array com todas as propriedades do objeto

for (let entry of Object.entries(produto)) { //intera sobre um objeto como se fosse um array
    console.log(entry)
}