const upBtn = document.querySelector(".fa-solid")
const dropdown = document.querySelector(".dropdown")
const textBox= document.querySelector(".textBox")
const option= document.querySelector(".option")

textBox.addEventListener("click", ()=>{
    upBtn.classList.toggle("active")
    dropdown.classList.toggle("active")
})

option.addEventListener("click", (e)=>{
    textBox.value = e.target.innerHTML.split(">")[2]
})