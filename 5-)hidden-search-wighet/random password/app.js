const password1 = document.getElementById("pasword")
generate=() =>{
    const chars = "0123456789abcdefghijklmnoprsqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWZY"
    let password ="";
    for(let i =0 ;i<12; i++){
        let randomNumber = Math.floor(Math.random()*chars.length)
        password += chars[randomNumber]
    }
    password1.value=password
}
copy=()=>{
    // password1.select();
    // password1.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(password1.value)
    alert("Copied the text: " + password1.value);
    
}
