const cursor = document.querySelector("#cursor")
document.addEventListener("mousemove",(e)=>{
    let x = e.clientX 
    let y = e.clientY
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
})