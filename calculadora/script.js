const display = document.getElementById("display");

function add(valor) {
  display.value += valor;
}

function limpar() {
  display.value = "";
}

function apagar() {
  display.value = display.value.slice(0, -1);
}

function calcular() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "erro";
  }
}
