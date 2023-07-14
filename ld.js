let bode = document.getElementById("bode")
let btn = document.getElementById("btn")
function mode() {
    if (btn.innerHTML=="Light") {
        btn.innerHTML="Dark"
        bode.style.backgroundColor="black"
        bode.style.color="white"
    } else {
        btn.innerHTML="Light"
        bode.style.backgroundColor="white"
        bode.style.color="black"
        
    }


}