const content = document.querySelector("#content")
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")



let arr = []

let getStore = JSON.parse(localStorage.getItem('list'))

function loadFromLocalStorage() {
  if (getStore) {
    var p = document.createElement("p")
    for (let i = 0; i < getStore.length; i++) {
      p.innerHTML = getStore[i]
    }
    content.appendChild(p)
  }
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