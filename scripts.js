// function de selecionar elemento
let element = function (elementClass) {
  // el: string contendo classe do elemento
  const elementList = document.querySelectorAll(elementClass);
  if (elementList.length > 1) {
    return elementList; // retorna node list inteira se length > 0
  } else {
    return elementList[0]; // retorna o unico elemento se length = 1
  }
};

// variáveis ...

let calcVisor = element(".calculadora-visor"), // visor
  equals = element(".equals"), // botao resultado
  nums = element(".num"), // nodelist numeros
  ops = element(".operator"), // nodeList operadores
  oldNum = "", // numero antigo
  actualNum = "", // numero atual
  result = "", // resultado até o momento
  actualOp = ""; // operador atual

// quando clica no botão de numero

let setNum = function () {
  if (result) {
    // se existir um resultado...
    actualNum = this.value;
    result = "";
  } else {
    actualNum += this.value;
  }

  calcVisor.innerHTML = actualNum;
};

// quando clica no botão de operador

let setOp = function () {
  oldNum = actualNum; // passando valor atual p/ valor antigo
  actualNum = ""; // reseta valor atual
  actualOp = this.value; // pegando operador do "value" do botão
};

// quando clica no botão de resultado

let mostraNum = function () {
  oldNum = parseFloat(oldNum);
  actualNum = parseFloat(actualNum);

  switch (actualOp) {
    case "+":
      result = oldNum + actualNum;
      break;
    case "-":
      result = oldNum - actualNum;
      break;
    case "*":
      result = oldNum * actualNum;
      break;
    case "/":
      result = oldNum / actualNum;
      break;
    default:
      result = actualNum;
      break;
  }

  calcVisor.innerHTML = result; // mostra resultado

  // resetando...
  oldNum = 0;
  actualNum = result;
};

// quando clica no botao de limpar tudo
let clearAll = function () {
  oldNum = "";
  theNum = "";
  calcVisor.innerHTML = "0";
};

// Setando eventos de clique

for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", setNum);
}

for (let i = 0; i < ops.length; i++) {
  ops[i].addEventListener("click", setOp);
}

equals.addEventListener("click", mostraNum);
element(".clearall").addEventListener("click", clearAll);
