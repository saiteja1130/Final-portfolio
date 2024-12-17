let menuCon=document.querySelector(".nav-list");
let menuOpen=document.querySelector("#open-menu");
let menuClose=document.querySelector("#close-menu");


menuOpen.addEventListener("click",()=>{
    menuCon.style.transform= "translateY(0)";
    menuClose.style.display="block";
    menuOpen.style.display="none";
})
menuClose.addEventListener("click",()=>{
    menuCon.style.transform= "translateY(-115%)";
    menuClose.style.display="none";
    menuOpen.style.display="block";
})