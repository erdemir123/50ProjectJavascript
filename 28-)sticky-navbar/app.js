window.addEventListener("scroll",()=>{
    const header = document.querySelector("header")
    if(window.innerHeight>100){
        header.classList.toggle("active")
    }
})

