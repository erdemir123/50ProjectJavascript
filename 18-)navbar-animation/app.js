const marker = document.querySelector("#marker")
const item = document.querySelectorAll("nav a")
item.forEach(link=>{
    link.addEventListener("click",(e)=>{
        indicator(e.target)
        console.log(indicator)
    })
})
function indicator(e){
    marker.style.left = e.offsetLeft+"px"
    marker.style.width = e.offsetWidth+"px"
}
