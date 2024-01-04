# Object define Property

```javascript
function Produto(nome, preco, estoque) {
    this.nome = nome 
    this.preco = preco 
   
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false
    })

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: true
    })
}

const p1 = new Produto('Camiseta oversized', 59, 22)
p1.estoque = 33

console.log(p1)
```

Com o Object.defineProperty, posso definir algumas coisas nas propriedades do meu objeto, irei explicar oque cada um faz:
- enumerable: torna visivel a propriedade em que você está definindo nesse exemplo é o estoque, então se tiver true vai ser imprimido no terminal a quantidade de estoque mas se tiver false não vai ser visivel.
- value: o valor recebe a propriedade em que eu estou definindo.
- writable: define se é possivel alterar o valor, nesse caso está false então não posso mudar o valor do estoque de 22 para 33
- configurable: define se essas configurações pode ser reconfigurada, se tiver true pode se tiver false não