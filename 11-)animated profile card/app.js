const span = document.querySelector(".span")
const card = document.querySelector(".card")
const btn = document.querySelector(".btn")

const colorlist=["red", "yellow","grey","pink","green"]


span.addEventListener("click",()=>{
    span.classList.toggle("active")
    card.classList.toggle("active")
})
let sayı = 0
function color(){
    sayı++
    btn.style.backgroundColor=colorlist[sayı]
    btn.style.color=colorlist[sayı-1]
    if(sayı>colorlist.length-2){
        sayı=0
    }
}
setInterval(color, 300);

let ind = 0
const text = "Someone Famous"
function subheader(){
    
const subhead = document.querySelector(".head")
    ind++
    subhead.innerHTML = text.slice(0,ind)
    if(ind>text.length){
        ind= 0
    }
    setTimeout(subheader,100)
}
subheader()





