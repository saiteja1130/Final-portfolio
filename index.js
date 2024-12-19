let navList=document.querySelector(".navbar-nav");
let navItem=document.querySelectorAll(".nav-item");
let navLink=document.querySelectorAll(".nav-link");
let homeCon=document.querySelector(".name");
let aboutmeCon=document.querySelector(".about-me");
let mainCon=document.querySelector(".main");
let skillCon=document.querySelector(".skills-box");
let projectCon=document.querySelector(".projects-box");
let contactMe=document.querySelector(".contact-me-section");
let contactMeIcon=document.querySelector(".email-icon");
let submitBtn=document.querySelector(".submit-btn");
const afterSubmitBtn=document.getElementById("after-submit");
const sucessBox=document.querySelector(".success-box");
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
            skillCon.classList.remove("visible");
            skillCon.classList.add("hidden");
            projectCon.classList.remove("visible");
            projectCon.classList.add("hidden");
            contactMe.classList.remove("visible");
            contactMe.classList.add("hidden");
            sucessBox.classList.add("hidden");
            sucessBox.classList.remove("visible");
            
        }
        else if(navMenu.innerText=="About Me"){
            homeCon.classList.remove("visible");
            homeCon.classList.add("hidden");
            aboutmeCon.classList.add("visible");
            aboutmeCon.classList.remove("hidden");
            skillCon.classList.remove("visible");
            skillCon.classList.add("hidden");
            projectCon.classList.remove("visible");
            projectCon.classList.add("hidden");
            contactMe.classList.remove("visible");
            contactMe.classList.add("hidden");
            sucessBox.classList.add("hidden");
            sucessBox.classList.remove("visible");
           
        }
        else if(navMenu.innerText=="Skills"){
            homeCon.classList.remove("visible");
            homeCon.classList.add("hidden");
            aboutmeCon.classList.add("hidden");
            aboutmeCon.classList.remove("visible");
            skillCon.classList.add("visible");
            skillCon.classList.remove("hidden");
            projectCon.classList.remove("visible");
            projectCon.classList.add("hidden");
            contactMe.classList.remove("visible");
            contactMe.classList.add("hidden");
            sucessBox.classList.add("hidden");
            sucessBox.classList.remove("visible");
        }
        
        else if(navMenu.innerText=="Projects"){
            homeCon.classList.remove("visible");
            homeCon.classList.add("hidden");
            aboutmeCon.classList.add("hidden");
            aboutmeCon.classList.remove("visible");
            skillCon.classList.remove("visible");
            skillCon.classList.add("hidden");
            projectCon.classList.add("visible");
            projectCon.classList.remove("hidden");
            contactMe.classList.remove("visible");
            contactMe.classList.add("hidden");
            sucessBox.classList.add("hidden");
            sucessBox.classList.remove("visible");
        }
        else{
            homeCon.classList.remove("visible");
            homeCon.classList.add("hidden");
            aboutmeCon.classList.add("hidden");
            aboutmeCon.classList.remove("visible");
            skillCon.classList.remove("visible");
            skillCon.classList.add("hidden");
            projectCon.classList.remove("visible");
            projectCon.classList.add("hidden");
            contactMe.classList.add("visible");
            contactMe.classList.remove("hidden");
            sucessBox.classList.add("hidden");
            sucessBox.classList.remove("visible");
        }
        
    })
})

contactMeIcon.addEventListener("click",()=>{
    homeCon.classList.remove("visible");
            homeCon.classList.add("hidden");
            aboutmeCon.classList.add("hidden");
            aboutmeCon.classList.remove("visible");
            skillCon.classList.remove("visible");
            skillCon.classList.add("hidden");
            projectCon.classList.remove("visible");
            projectCon.classList.add("hidden");
            contactMe.classList.add("visible");
            contactMe.classList.remove("hidden");
            sucessBox.classList.add("hidden");
            sucessBox.classList.remove("visible");
})

submitBtn.addEventListener("click",()=>{
    sucessBox.classList.add("visible");
    contactMe.classList.remove("visible");
    contactMe.classList.add("hidden");
})
afterSubmitBtn.addEventListener("click", ()=>{
    homeCon.classList.add("visible");
    homeCon.classList.remove("hidden");
    sucessBox.classList.remove("visible");
    sucessBox.classList.add("hidden");
})
