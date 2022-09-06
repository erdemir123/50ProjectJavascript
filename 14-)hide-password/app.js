const input = document.querySelector(".input")
const hide = document.querySelector("#hide")
const show = document.querySelector("#show")

let sayı=0
hide.addEventListener("click", ()=>{
    sayı++
if(sayı%2==0){
    input.setAttribute("type", "password")
    hide.classList.add("fa-eye-slash")
}
else{
    input.setAttribute("type", "text")
    hide.classList.remove("fa-eye-slash")
}
})

    
    