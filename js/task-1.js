const mainList = document.querySelectorAll("#categories > .item")

console.log(`В списке ${mainList.length} категории`)

const getInfo = function (array) {
  array.forEach((element) =>
    console.log(
      `Категория: ${element.firstElementChild.textContent}  Количество элементов: ${element.lastElementChild.children.length}`
    )
  )
}

getInfo(mainList)
