const marker = document.querySelector("#marker")
const item = document.querySelectorAll("ul li a")
const ul = document.querySelector("ul")


ul.addEventListener("mousemove", (e)=>{
    marker.style.top = e.target.offsetTop+ "px"

    marker.style.width = e.target.offsetWidth+ 50 + "px"
})