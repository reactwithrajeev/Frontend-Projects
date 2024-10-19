const menuBar = document.querySelector("#menuBar");
const phoneSideBar = document.querySelector(".phoneSideBar");
const sideBar = document.querySelector(".sidebar");
const contentContainer = document.querySelector(".content-container");
const cards = document.querySelectorAll(".content-card");

 let isMenuHidden = false;

 menuBar.addEventListener("click",()=>{
    if(isMenuHidden === false){
        sideBar.style.display = "none";
        phoneSideBar.style.display = "block"
        contentContainer.style.cssText = "width: auto; margin-left:0;"
        cards.forEach((card)=>{
            card.style.cssText ="width:340px;"
        })
        isMenuHidden = true
    }else{
        sideBar.style.display = "block";
        phoneSideBar.style.display = "none"
        contentContainer.style.cssText = "width: 82%; margin-left:18%;"
        cards.forEach((card)=>{
            card.style.cssText ="width:392px;"
        })
        isMenuHidden = false
    }
 })

