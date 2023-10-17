const hamburger = document.querySelector(".hamburger");
const navmenu =document.querySelector(".navmenu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll("a").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))