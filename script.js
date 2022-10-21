var codificar = document.querySelector("#codificar");
var decodificar = document.querySelector("#decodificar");
var incremento = document.querySelector(".chave");
var selecione = document.querySelector(".select");
var btnRadio = document.querySelector(".radio-button");
var btn = document.querySelector("#btnCod");
var resultado = document.querySelector("#result");

// Função da Base64.
function base64() {
  let mensagem = document.querySelector("#msg").value;
  if (codificar.checked) {
    let codificado = btoa(mensagem);
    return codificado;
  } 
  else if (decodificar.checked) {
    let decodificado = atob(mensagem);
    return decodificado;
  }
}

// Incremento utilizado na Cifra de César.
selecione.addEventListener("click", function () {
  if (selecione.value == "cesar") {
    incremento.style.display = "block";
  } 
  else {
    incremento.style.display = "none";
  }
})

// Função da Cifra de César.
function cifraCesar() {
  let msg = document.querySelector("#msg").value;
  let chave = parseInt(document.querySelector("#rangenumber").value);
  let saida = '';
  
  if (codificar.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg[i] === msg[i].toUpperCase()) {
        saida += String.fromCharCode((msg.charCodeAt(i) + chave - 65) % 26 + 65); 
    } 
      else {
        saida += String.fromCharCode((msg.charCodeAt(i) + chave - 97) % 26 + 97);
      }
    }   
    return saida;
  } 
  else if (decodificar.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);
      } 
      else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
      } 
      else {
        saida += String.fromCharCode(msg.charCodeAt(i));
      }
    }
    return saida;
  }
}

// Alteração de texto do botão.
btnRadio.addEventListener("click", function () {
  if (codificar.checked) {
    btn.innerHTML = "Codificar Mensagem!";
  } 
  else if (decodificar.checked) {
    btn.innerHTML = "Decodificar Mensagem!";
  }
})

// Funcionamento do botão de acordo com o método de codificação selecionado.
btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (selecione.value === "base64") {
    resultado.innerText = base64();
  } 
  else if (selecione.value === "cesar") {
      resultado.innerText = cifraCesar();
  }
})
