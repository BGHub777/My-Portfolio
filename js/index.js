const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
let menuStatus = false;

menu.style.marginLeft = "-30rem";



function menuToggle(){
    if (menuStatus == false){
        menu.style.marginLeft = "0px";
        menuStatus = true;
    }
    else if (menuStatus == true){
        menu.style.marginLeft = "-30rem";
        menuStatus = false;
    }
}





menuBtn.onclick = menuToggle;

const menuSec = document.getElementByClass("menu-btn")

menuSec.addEventListener("click", function(event){
    event.preventDefault();
});

document.querySelectorAll('a').forEach(elem => {
    elem.addEventListener('mouseover', function(){
        color: white;
        backgroundColor: black; 
    })
})

