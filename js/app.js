const content = document.querySelector("#content")
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const clear = document.querySelector("#clear")

const arr = []

let getStore = JSON.parse(localStorage.getItem('list'))
console.log(getStore === null);

function loadFromLocalStorage() {
  if (getStore) {
    getStore.forEach(element => {
      let p = document.createElement("p")
      content.appendChild(p)
      p.innerHTML += element
    });}
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

  p.innerHTML = value
  content.appendChild(p)
  if (getStore === null) {
    arr.push(value)
  } else {
    getStore.push(value)
  }

  let store = getStore === null ? JSON.stringify(arr) : JSON.stringify(getStore)
  localStorage.setItem('list', store)
}

loadFromLocalStorage()

clear.onclick = () => {
  localStorage.clear()
  location.reload() 
}