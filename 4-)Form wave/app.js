// const labels = document.querySelectorAll(".form-control label")
// labels.forEach(label=>{
//     label.innerHTML = label.innerText
//     .split("")
//     .map((letter, s)=> `<span style="transition-delay:${s * 50}ms">${letter}</span>`)
//     .join("");
// })
const labels =document.querySelectorAll(".form-control label")
labels.forEach(labels=>{
    labels.innerHTML = labels.innerText
    .split("")
    .map((letter, s)=>
    `<span style="transition-delay:${s * 50}ms">${letter}</span>`)
    .join("")
})