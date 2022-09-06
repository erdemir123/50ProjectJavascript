const toggle = document.querySelector(".toggleBtn")
const pswrd = document.querySelector("#pswrd")
const show = document.querySelector("#show")
const hide = document.querySelector("#hide")
const lower = document.querySelector("#lower")
const upper = document.querySelector("#upper")
const number = document.querySelector("#number")
const special = document.querySelector("#specialy")
const length = document.querySelector("#length")
let sayı=1
toggle.addEventListener("click", ()=>{
    sayı++
    if(sayı%2==0){
        pswrd.setAttribute("type", "text")
        show.style.display="block"
        hide.style.display="none"
    }
    else{
        pswrd.setAttribute("type", "password")
        hide.style.display="block"
        show.style.display="none"
    }
        
    
    })
    pswrd.addEventListener("input",()=>{
        let value = pswrd.value
        const lowers = new RegExp('(?=.*[a-z])')
        const uppers = new RegExp("(?=.*[A-Z])")
        const numbers = new RegExp("(?=.*[0-9])")
        const lengths = new RegExp("(?=.{8,})")
        const specials = new RegExp("(?=.*[!@#\$%\^&\*])")
        if(lowers.test(value)){
            lower.classList.add("active")
        }
        if(uppers.test(value)){
            upper.classList.add("active")
        }
        if(numbers.test(value)){
            number.classList.add("active")
        }
        if(lengths.test(value)){
            length.classList.add("active")
        }
        if(specials.test(value)){
            specialy.classList.add("active")
        }

    })