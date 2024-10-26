const menuBtn = document.querySelector(".menubar-btn");
const menu = document.querySelector("#menuList");

let isMenuVisible = false
menuBtn.addEventListener("click",()=>{
    if(isMenuVisible === false){
        menu.style.left = "0%";
        menuBtn.innerHTML = '<i class="ri-close-large-fill"></i>'
        isMenuVisible = true
    }else{
        menu.style.left = "-100%";
        menuBtn.innerHTML =`<i class="ri-menu-line"></i>`
        isMenuVisible = false
        
    }
})
