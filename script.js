
function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();


// ------------Page 1 Gsap---------
// ------------Page 1 Gsap---------
gsap.from("#page1 #pg1text",{
    opacity:0,
    duration:1,
    ease: Expo.easeInOut
})

var ab=gsap.timeline();

ab.from("#image1",{
    y:200,
    duration: .8,
    delay:.5,
    opacity:0
})
.from("#image2",{
    x: 200,
    duration: .8,
    opacity:0
},`-=.8`)
.from("#image3",{
    y: -200,
    duration: .8,
    opacity:0
},`-=.8`)
// ------------Page 2 Gsap---------
// ------------Page 2 Gsap---------
// ------------Page 2 Gsap---------
gsap.from("#page2>h3",{
    scrollTrigger:{
        scroller: "#main",
        trigger:"#page2",
        start:"top 70%",
    },
    y:30,
    opacity:0,
    duration:1,
    ease: Expo.easeInOut,
    // skewY:3
})
gsap.from("#page2>h1",{
    scrollTrigger:{
        scroller: "#main",
        trigger:"#page2>h3",
        start:"top 80%",
    },
    y:30,
    opacity:0,
    duration:1.5,
    ease: Expo.easeInOut,
    // skewY:3
})
gsap.from("#page2>h2",{
    scrollTrigger:{
        scroller: "#main",
        trigger:"#page2",
        start:"top 60%",
        // end:"top 40%",
    },
    y:30,
    opacity:0,
    duration:3,
    ease: Expo.easeInOut,
    // skewY:3
})
// ------------Page 3 Gsap---------
// ------------Page 3 Gsap---------
gsap.from("#pg3image1,#pg3image2,#pg3image3,#pg3image4,#pg-three-right>h1,#pg-three-right>p,.pg3btn",{
    scrollTrigger:{
        trigger:"#page3",
        start:"top 50%",
        scroller:"#main",
    },
    stagger:.2,
    y:50,
    opacity:0,
})
// --------------------Page 4 Gsap--------------
// --------------------Page 4 Gsap--------------
var p4 =gsap.timeline()
p4.from("#page4>.heading",{
    scrollTrigger:{
        trigger:"#page4",
        start:"top 60%",
        scroller:"#main",
    },
    x: -100,
    duration:1,
    opacity:0
})
gsap.from("#companies>img",{
    scrollTrigger:{
        trigger:"#page4",
        start:"top 60%",
        end:"top 20%",
        scroller:"#main",
        scrub: true
    },
    x: 100,
    stagger: .001,
    opacity:0.5,
})
// --------------------Page 5 Gsap--------------
// --------------------Page 5 Gsap--------------
var flag=0;
var menubar=document.querySelector("#menubar"),
menu=document.querySelector("#menu"),
mla=document.querySelector("#mla"),
mlb=document.querySelector("#mlb"),
mlc=document.querySelector("#mlc"),
menubaropen=document.querySelector("#menubaropen"),
sopen=document.querySelector("#sopen"),
sropen=document.querySelector("#servicesopen");

if(flag===0){
sopen.addEventListener("mouseover",function(){
    sropen.style.display="flex"
    sropen.style.opacity="1"
    console.log("hey")
})
sropen.addEventListener("mouseover",function(){
    sropen.style.display="flex"
    sropen.style.opacity="1"
})
sropen.addEventListener("mouseout",function(){
    sropen.style.display="none"
    flag=1;
})
}


menubar.addEventListener("click",function(){
    if(flag===0){
    mla.style.transform= "rotate(-45deg)";
    mla.style.transformOrigin= "80% 30%";
    mlb.style.opacity="0";
    mlc.style.transform= "rotate(45deg)";
    mlc.style.transformOrigin= "80% 30%";
    mlc.style.width="100%";
    menubaropen.style.top="0%"
    flag=1;
        
    }else{
        mlb.style.opacity="1";
        mla.style.transform= "rotate(0deg)";
        mla.style.transformOrigin= "80% 30%";
        mlc.style.transform= "rotate(0deg)";
        mlc.style.transformOrigin= "80% 30%";
        mlc.style.width="50%";
        menubaropen.style.top="100%";
        flag=0;
    }
})


// ------Page 5 hover and Zoom effecrt--------
// ------Page 5 hover and Zoom effecrt--------
var ofc1=document.querySelector("#ofc1"),
ofc2=document.querySelector("#ofc2"),
card1img=document.querySelector(".card1img"),
card2img=document.querySelector(".card2img"),
c1=document.querySelector("#c1"),
c2=document.querySelector("#c2"),
clogo=document.querySelector("#clogo")
;

function imageshover(){
    if(flag===0){
        clogo && ofc1 && c1.addEventListener("mouseover",function(){
            card1img.style.width= "scale(4)";
            flag=1;
        })
    }
    else{
        c1.addEventListener("mouseout",function(){
            card1img.style.transform= "scale(0)";
            flag=0;
        })
    }
    
    if(flag===0){
        c2.addEventListener("mouseover",function(){
            card2img.style.transform= "scale(1.1)";
            flag=1;
        })
    }
    else{
    c2.addEventListener("mouseout",function(){
        card2img.style.transform= "scale(1)";
        flag=0;
    })
    }
}
imageshover();



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });