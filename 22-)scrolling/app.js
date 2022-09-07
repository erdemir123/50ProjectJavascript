
const reveals = document.querySelectorAll(".reveal")
window.addEventListener("scroll", ()=> {
const wh = window.innerHeight
const sabit = 100
reveals.forEach(active=>{        
        const rh = active.getBoundingClientRect().top;
        if(rh < wh-sabit){
            active.classList.add("active")
        }
        else{
            active.classList.remove("active")
        }
    })
    console.log("merhaba".length)
})