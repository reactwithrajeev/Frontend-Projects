function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

// ** Navbar Animation Starts Here👇


function navAnimation(){
    const nav = document.querySelector("nav");
    nav.addEventListener("mouseenter",()=>{
        let tl = gsap.timeline();
        tl.to("#navBottom",{
            height:"21vh",
            duration:0.5
        })
        tl.to("#nav-part2 #nav-elem h5",{
            display:"block",
            duration:0.1
        })
        tl.to("#nav-part2 #nav-elem h5 span",{
            y:0,
            stagger:{
                amount:0.7,
            }
        })
    })
    nav.addEventListener("mouseleave",()=>{
        let tl = gsap.timeline();
        tl.to("#nav-part2 #nav-elem h5 span",{
            y:25,
            stagger:{
                amount:0.2,
            }
        })
        tl.to("#nav-part2 #nav-elem h5",{
            display:"none",
            duration:0.1,
        })
        tl.to("#navBottom",{
            height:"0",
            duration:0.1,
        })
    
    })
}



function page2Animation(){
    const rightElem = document.querySelectorAll(".rightElem");
// const rightElemImg = document.querySelector("#rightElem img");
    rightElem.forEach((elem)=>{
        let img = elem.querySelector(".rightElem img")
        elem.addEventListener("mouseenter",()=>{
            gsap.to(img,{
                opacity:1,
                scale:1,
            })
        })
        elem.addEventListener("mouseleave",()=>{
            gsap.to(img,{
                opacity:0,
                scale:0,
            })
        })
    
        elem.addEventListener("mousemove",(dets)=>{
            // console.log(elem.getBoundingClientRect().x)
            // console.log(elem.getBoundingClientRect().y)
            gsap.to(img,{
                x:dets.x - elem.getBoundingClientRect().x -50,
                y:dets.y - elem.getBoundingClientRect().y- 100,
            })
        })
    })
}


function page3Animation(){
    const page3Center = document.querySelector("#page3Center");
    const page3Video = document.querySelector("#page3 video");
    page3Center.addEventListener("click",()=>{
        page3Video.play();
        gsap.to(page3Video,{
            transform:"scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0,
        })
    })
    
    page3Video.addEventListener("click",()=>{
        page3Video.pause();
        gsap.to(page3Video,{
            transform:"scaleX(0.7) scaleY(0)",
            opacity:0,
            borderRadius:"30px",
        })
    })
}


function page6Animation(){
    const columnBottom = document.querySelectorAll(".abr-col-bottom");
const rightColumn = document.querySelectorAll(".another-box-right-colums");
// const page6Videos = document.querySelectorAll("#abr-col-image-box video");
const page6ImageBox = document.querySelectorAll("#abr-col-image-box")
const page6BlueBtn  = document.querySelectorAll(".another-box-left button")
 

columnBottom.forEach((clmBottomElem)=>{
    let page6Videos = clmBottomElem.querySelector(".abr-col-image-box video");
    // console.log(page6Videos);

    clmBottomElem.addEventListener("mouseenter",()=>{
        page6Videos.currentTime = 0
        // console.log("Mouse entered")
        page6Videos.play();
        page6Videos.style.opacity = 1;
    })
    clmBottomElem.addEventListener("mouseleave",()=>{
        // console.log("Mouse leaved")
        page6Videos.pause();
        page6Videos.style.opacity = 0;
        page6Videos.currentTime = 0
    })
})

rightColumn.forEach((boxRightClm)=>{
    let page6BlueCicle = boxRightClm.querySelector(".abr-blueCirclePointer");
    // console.log(page6BlueCicle);
    boxRightClm.addEventListener("mousemove",(blueCircleMoving)=>{
        console.log(blueCircleMoving.x)
        gsap.to(page6BlueCicle,{
            opacity:1,
            display:"block",
            scale:1,
            x:blueCircleMoving.x - boxRightClm.getBoundingClientRect().x -100,
            y:blueCircleMoving.y - boxRightClm.getBoundingClientRect().y - 100,
        })

    })
    boxRightClm.addEventListener("mouseleave",(blueCircleMoving)=>{
        // console.log(blueCircleMoving.x)
        gsap.to(page6BlueCicle,{
            opacity:0,
            display:"none",
            scale:0,
        })

    })

})

page6BlueBtn.forEach((page6BlueBtnElem)=>{
    let page6BlueBtnEL = page6BlueBtnElem.querySelector(".caseStudiesBtn span");
    page6BlueBtnElem.addEventListener("mouseenter",()=>{
        let btnTL = gsap.timeline();
        btnTL.to(page6BlueBtnElem,{
            scale:1.1,
            opacity:1,
            backgroundColor:"#fff",
            color:"#000",

        })
        btnTL.from(page6BlueBtnEL,{
            y:10,
            scale:0,
            opacity:0,
            stagger:0.5

        })
    })
    page6BlueBtnElem.addEventListener("mouseleave",()=>{
        let btnTL = gsap.timeline();
        btnTL.to(page6BlueBtnElem,{
            scale:1,
            opacity:1,
            backgroundColor:"#4f5bff",
            color:"#fff",

        })
        // btnTL.from(page6BlueBtnEL,{
        //     y:40,
        //     scale:0,
        //     opacity:0,

        // })
    })

})

}



function page7Animation(){
    const page7RightContainerTop = document.getElementById("page7RightContainerTop");
const page7TopContainerUpArrow = document.getElementById("page7TopContainerUpArrow");
const page7TopContainerDownArrow = document.getElementById("page7TopContainerDownArrow");
const page7ArrowIconBoxTop = document.getElementById("page7ArrowIconBoxTop");

let isContainerOpen = 0;
page7ArrowIconBoxTop.addEventListener("click",()=>{

    if(isContainerOpen === 0){
        page7RightContainerTop.style.height = "auto";
        page7RightContainerTop.style.opacity = 1;
        page7RightContainerTop.style.display = "block";
        page7TopContainerDownArrow.style.display= "none";
        page7TopContainerUpArrow.style.display= "block";
        isContainerOpen = 1;

    }else{
        page7RightContainerTop.style.height = 0;
        page7RightContainerTop.style.opacity = 0;
        page7RightContainerTop.style.display = "none";
        page7TopContainerDownArrow.style.display= "block";
        page7TopContainerUpArrow.style.display= "none";
        isContainerOpen = 0

    }
})

const page7RightContainerBottom = document.getElementById("page7RightContainerBottom");
const page7BottomContainerDownArrow = document.getElementById("page7BottomContainerDownArrow");
const page7BottomContainerUpArrow = document.getElementById("page7BottomContainerUpArrow");
const page7ArrowIconBoxBottom = document.getElementById("page7ArrowIconBoxBottom");

let isContainerOpenBottom = 0
page7ArrowIconBoxBottom.addEventListener("click",()=>{
    
    if(isContainerOpenBottom===0){
        page7RightContainerBottom.style.height = "auto";
        page7RightContainerBottom.style.opacity = 1;
        page7RightContainerBottom.style.display = "block";
        page7BottomContainerDownArrow.style.display= "none";
        page7BottomContainerUpArrow.style.display= "block";
        isContainerOpenBottom = 1;

    }else{
        page7RightContainerBottom.style.height = 0;
        page7RightContainerBottom.style.opacity = 0;
        page7RightContainerBottom.style.display = "none";
        page7BottomContainerDownArrow.style.display= "block";
        page7BottomContainerUpArrow.style.display= "none";
        isContainerOpenBottom = 0;
    }

 

})
}


function page8Animation(){
    
gsap.to(".bottom8Parts h4",{
    x:150,
    duration:1,
    stagger:{
        amount:-0.7,
        },
        scrollTrigger:{
            trigger:(".bottom8Parts"),
            scroller:"main",
            // markers:true,
            top:"top 70%",
            end:"top -90%",
            scrub:true,
        }

})
}



locomotiveAnimation();
navAnimation();
page2Animation();
page3Animation();
page6Animation();
page7Animation();
page8Animation();


function loadingAnimation(){
    
let page1TL = gsap.timeline();

page1TL.from("#page1",{
    opacity:0,
    duration:0.3,
    Delay:0.2,
})

page1TL.from("#page1",{
        transform:"scaleX(0.2) scaleY(0)",
        borderRadius:"50px",
        duration:1.5,
        ease: "expo.out",

})

page1TL.from("nav",{
    opacity:0,
})
page1TL.from("#page1 h1",{
    opacity:0,
    y:80,
    duration:1,
})

page1TL.from("#page1 p",{
    opacity:0,
    y:80,
    duration:1,
})
page1TL.from("#page1 div",{
    y:80,
    opacity:0,
    duration:0.5,
    stagger:0.2,

})
}

loadingAnimation();