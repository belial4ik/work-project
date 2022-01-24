const content = document.querySelector("#content")
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const clear = document.querySelector("#clear")





let arr = []

let getStore = JSON.parse(localStorage.getItem('list'))
console.log(getStore);

function loadFromLocalStorage() {
  if (getStore) {
    getStore.forEach(element => {
      let p = document.createElement("p")
      content.appendChild(p)
      p.innerHTML += element
    });}
}

if (getStore !== null) {
  const p = document.createElement("p")
  for (let i = 0; i < getStore.length; i++) {
    p.innerHTML = getStore[i]
    content.childNodes = p
  }
}

btn.addEventListener('click', (e) => {
  if (input.value === '') {
    alert('введите что нибудь')
  } else {
    createDeleteElement(input.value) 
      input.value = ''
  }
})

function createDeleteElement(value) {  
  const p = document.createElement("p")
  const btn = document.createElement("button")

  p.innerHTML = value
  content.appendChild(p)
  arr.push(value)
  arr
  console.log(arr);

  let store = JSON.stringify(arr)
  localStorage.setItem('list', store)
}

loadFromLocalStorage()

clear.onclick = () => {
  localStorage.clear()
  location.reload() 
}