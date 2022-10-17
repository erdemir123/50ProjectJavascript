// const body = document.querySelector("body")
// window.addEventListener("mousemove",(e)=>{
//         let yatay = e.offsetX
//         let dikey = e.offsetY
//         const  span = document.createElement("span")
//         body.appendChild(span)
//         span.classList.add("active")
//         span.style.top = dikey-10+"px"
//         span.style.left = yatay-5+"px"
//         // setInterval(function(){
//         //     span.remove()
//         // }, 1000)
// })
const input = document.querySelector(".cp")
const btn = document.querySelector("button")
sayı = 0
btn.addEventListener("click", ()=>{
    const toasts= document.querySelector(".toasts")
    const span = document.createElement("div")
    toasts.appendChild(span)
    span.classList.add("pop")
    span.innerHTML="Giriş yapıldı"
    setTimeout(function(){
        span.remove()
    },3000)
    
    
    
})
