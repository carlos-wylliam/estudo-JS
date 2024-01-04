function Produto(nome, preco, estoque) {
    this.nome = nome 
    this.preco = preco 
   
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false
    })

    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true,
    //     value: estoque,
    //     writable: false,
    //     configurable: true
    // })
}

const p1 = new Produto('Camiseta oversized', 59, 22)
p1.estoque = 33

console.log(p1)