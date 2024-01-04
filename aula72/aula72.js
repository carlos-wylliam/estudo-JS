function Produto(nome, preco, estoque) {
    this.nome = nome 
    this.preco = preco 
   
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoquePrivado
        },
        set: function(value) {
            if (typeof value !== 'number') {
                console.log('bad value')
                return
            }
            return estoquePrivado = value
        }
    })
}

const p1 = new Produto('Camiseta oversized', 59, 22)
console.log(p1)
p1.estoque = 500
console.log(p1.estoque)