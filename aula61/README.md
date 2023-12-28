# Funções geradoras

```javascript
function* geradora1() {
  //Código qualquer
  yield "Valor 1";
  //Código qualquer
  yield "valor 2";
  //Código qualquer
  yield "valor 3";

  const g1 = geradora1()
  console.log(g1)

  //O retorno dessa função é isto daqui:
  Object [Generator] {}

  //O retorno dessa função agora é isso daqui:
  console.log(g1.next())
  { value: 'Valor 1', done: false }

  //A propriedade done muda para true quando os returns dentro da função geradora acaba

  //O retorno dessa função agora é isso daqui:
  console.log(g1.next().value)
  console.log(g1.next().value)
  console.log(g1.next().value)

  //Valor 1
  //Valor 2
  //Valor 3
}
```


## Também eu posso iterar sobre essa função geradora

```javascript
    function* geradora1() {
        yield "Valor 1"
        yield "Valor 2"
        yield "Valor 3"
    }

    const g1 = geradora1()

    for (let valor of g1) {
        console.log(valor)
    }
```
