# Funções úteis para formatações comuns pt-br

Instalação via npm:
```shell
npm i mfm-utils
```

Importar funções:
```js
const { formatCep, formatCpf } = require("mfm-utils")
```

* **formatCep(value)**
  
  Retorna uma string no formato '#####-###'
  
  Caso o valor enviado não seja válido ou o número de caracteres não seja suficiente, retorna NULL.
  
* **formatCpf(value)**
  
  Retorna uma string no formato '###.###.###-##'
  
  Caso o valor enviado não seja válido ou o número de caracteres não seja suficiente, retorna NULL.

* **orderPtBr(list, campo)**

  Enviando uma lista de objetos a ordenação será pelo parâmetro compo.

  Exemplo:

```js
  lista1 = [
      { nome: 'Mario', sobrenome: 'Metta' },
      { nome: 'Fernando', sobrenome: 'Silva' },
      { nome: 'Carlos', sobrenome: 'Miranda' }
  ]

  lista2 = ['Mario', 'Fernando', 'Carlos']

  console.log(ordenarPtBr(lista1, 'nome'))
  //   [
  //     { nome: 'Carlos', sobrenome: 'Miranda' },
  //     { nome: 'Fernando', sobrenome: 'Silva' },
  //     { nome: 'Mario', sobrenome: 'Metta' }
  //   ]
```

* **orderPtBr(list)**

  Caso envie uma lista simples, não envie o parâmetro campo.

  Exemplo:

```js
  console.log(ordenarPtBr(lista2))
  //   [ 'Carlos', 'Fernando', 'Mario' ]
```

  **Importante: por tratar-se de ordenação (pt-br), palavras com os acentos (agudo, circunflexo e grave), o til, o apóstrofo e a cedilha serão tratadas adequadamente.**

