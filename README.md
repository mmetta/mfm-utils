# Função simples para formatação de CEP (Brasil)

Instalação via npm:
```shell
npm i mfm-utils
```

Importar funções:
```js
const { formatCep, formatCpf } = require("mfm-utils")
```

* formatCep(value)
  
  Retorna uma string no formato '#####-###'
  
  Caso o valor enviado não seja válido ou o número de caracteres não seja suficiente, retorna NULL.
  
* formatCpf(value)
  
  Retorna uma string no formato '###.###.###-##'
  
  Caso o valor enviado não seja válido ou o número de caracteres não seja suficiente, retorna NULL.
