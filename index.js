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
//created a function to reuse the code
//it will take one parameter(sections) that we pass when we clicked on the Navlinks
//next we created an array of variables that we declared and we iterate through each array using forEach loop
//forEach loop takes one argument (sectionEle) and checks if the sectionEle is equal to sections parameter is
//they are equal then it executes the if block and add classes other wise it will executes the else block
function showSection(sections){
    const section=[homeCon,aboutmeCon,sucessBox,skillCon,projectCon,contactMe]
    section.forEach(sectionEle=>{
        if(sections==sectionEle){
            sectionEle.classList.add("visible");
            sectionEle.classList.remove("hidden");
        }
        else{
            sectionEle.classList.add("hidden");
            sectionEle.classList.remove("visible");
        }
    })
}
navItem.forEach(navMenu=>{
  
    navMenu.addEventListener("click",()=>{
        if(navMenu.innerText=="Home"){
            showSection(homeCon);
        }
        else if(navMenu.innerText=="About Me"){
            showSection(aboutmeCon);
           
        }
        else if(navMenu.innerText=="Skills"){
            showSection(skillCon);
        }
        
        else if(navMenu.innerText=="Projects"){
            showSection(projectCon);
        }
        else{
            showSection(contactMe);
        }
        
    })
})

contactMeIcon.addEventListener("click",()=>{
    showSection(contactMe);
})

submitBtn.addEventListener("click",()=>{
    showSection(sucessBox);
})
afterSubmitBtn.addEventListener("click", ()=>{
    showSection(homeCon);
})
