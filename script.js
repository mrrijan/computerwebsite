const hamburger=document.querySelector(".burger");
const navmenu=document.querySelector(".nav-list");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})
document.querySelectorAll(".nav-item").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))