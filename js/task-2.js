const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]

const ulMain = document.querySelector("#ingredients")

for (let key in ingredients) {
  let liMain = document.createElement("li")
  liMain.textContent = ingredients[key]
  ulMain.appendChild(liMain)
}

console.log(ulMain)
