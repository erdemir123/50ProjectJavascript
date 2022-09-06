const body = document.querySelector("body")
document.addEventListener("mouseover",function(e){
    let x = e.clientX
    let y = e.clientY
    const span = document.createElement("span")
    span.classList.add("span")
    body.appendChild(span)
    span.style.left = x + "px"
    span.style.top = y + "px"
    setInterval(function(){
        span.remove()
    }, 1000)
})

