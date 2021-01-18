const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
]

const listRef = document.getElementById("gallery")
console.log(listRef)
images.forEach((elem) => {
  const createImage = `<li><image src="${elem.url}" alt="${elem.alt} width="300" height="300""</li>`
  listRef.insertAdjacentHTML("beforeend", createImage)
})

listRef.classList.add("list")
listRef.classList.add("gallery-list")
