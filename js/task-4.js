let counterValue = 0 // значение счетчика
let value = document.getElementById("value") // вывод данных

const decrementBtn = document.getElementById("decrementBtn") // вычитание
decrementBtn.onclick = function decrement() {
  counterValue--
  value.innerHTML = counterValue
}

const incrementBtn = document.getElementById("incrementBtn") // сложение
incrementBtn.onclick = function increment() {
  counterValue++
  value.innerHTML = counterValue
}
