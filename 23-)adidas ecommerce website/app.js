//!logo animation
const logo = document.querySelector(".logo")
const text = "E-COMMERCE"
let index = 1
let color = ["yellow", "red" , "grey", "black", "orange", "lime","brown", "#01ff62", "pink", "#212121", "lightgreen"]
logos()
function logos(){
    logo.innerHTML = text.slice(0, index)
    logo.style.color = color[index]
    index++
    if(index>text.length){
        index=1
    }
    setTimeout(logos, 300)
}

const opencart = document.getElementById("cart-icon")
const asd= document.querySelector(".cart")

opencart.addEventListener("click", ()=>{
asd.classList.add("active")
})
const closecart = document.getElementById("close-cart")
 const cartcls = document.querySelector(".cart")

 closecart.addEventListener("click", ()=>{
     cartcls.classList.remove("active")
 })


// function ready(){
//      const removebutton = document.getElementById("trash")
//      removebutton.addEventListener("click", ()=>{
//          removebutton.parentElement.remove()
//      })
    
//      }
//      ready()

    const card = document.querySelectorAll(".product-box")
    const cardbtn = document.querySelectorAll(".fa-cart-plus")
    class shopping{
        constructor(title, image, price){
            this.title=title;
            this.image=image;
            this.price=price;
        }
        
    }
    const cart = document.querySelector(".cart")
    class UI{
        addToCart(shoping){
            const listItem = document.createElement("div")
            listItem.classList= "list-item"
            listItem.innerHTML=
            ` 
            <div class="cart-content">
                <div class="cart-box">
                <img src="${shoping.image}" alt="" class="cart-img">
                <h2 class="cart-title">${shoping.title}</h2>
                <div class="detail-box">
                            <div class="cart-price">${shoping.price}</div>
                            <input type="number" value="1" class="cart-quantity">
                </div>
                    <i class="fa-solid fa-trash-can" id="trash"></i>
                </div>
            </div>
                `
            cart.appendChild(listItem)
            console.log(cart.childElementCount-3)
            const trash= document.querySelectorAll("#trash")
            trash.forEach((b)=>{
                b.addEventListener("click",()=>{
                    listItem.remove()
                })
            })
    
                
            
            
        }
    }
    for(let i = 0; i<card.length; i++){
        cardbtn[i].addEventListener("click",()=>{
            let title =card[i].querySelector(".product-title").textContent
            let image =card[i].querySelector(".product-img").src
            let price =card[i].querySelector(".price").innerHTML
            let shoping = new shopping(title, image, price)
            let list = new UI()
            list.addToCart(shoping)
        })
    }


    