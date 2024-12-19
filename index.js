let navList=document.querySelector(".navbar-nav");
let navItem=document.querySelectorAll(".nav-item");
let navLink=document.querySelectorAll(".nav-link");
let homeCon=document.querySelector(".name");
let aboutmeCon=document.querySelector(".about-me");
let mainCon=document.querySelector(".main");
let skillsSet=document.querySelector(".skills");
 //navItem queryselectorAll returns a node of classes list with the same name
 //loop through each node using foreach method
 //add an element to catch the every element(navActive)
 //add eventlistener for the particular element that we catched ny the foreach loop(navActive)
 //remove active class from the navItem using foreach Loop add remove for the Particular element
 //now add new class to the node using navActive element
navItem.forEach((navActive)=>{
    navActive.addEventListener("click",()=>{
        navItem.forEach(navActiveItem=>navActiveItem.classList.remove("active"))
        navActive.classList.add("active");
    })
})

navItem.forEach(navMenu=>{
  
    navMenu.addEventListener("click",()=>{
        if(navMenu.innerText=="Home"){
            homeCon.classList.add("visible");
            homeCon.classList.remove("hidden");
            aboutmeCon.classList.add("hidden");
            aboutmeCon.classList.remove("visible");
            skillsSet.classList.add("hidden");
            skillsSet.classList.remove("visible-grid");
        }
        else if(navMenu.innerText=="About Me"){
            homeCon.classList.remove("visible");
            homeCon.classList.add("hidden");
            aboutmeCon.classList.add("visible");
            aboutmeCon.classList.remove("hidden");
            skillsSet.classList.add("hidden");
            skillsSet.classList.remove("visible-grid");
        }
        else if(navMenu.innerText=="Skills"){
            homeCon.classList.remove("visible");
            homeCon.classList.add("hidden");
            aboutmeCon.classList.add("hidden");
            aboutmeCon.classList.remove("visible");
            skillsSet.classList.add("visible-grid");
            skillsSet.classList.remove("hidden");
        }
        
    })
})



