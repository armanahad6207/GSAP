gsap.from(".page1 #circle",{
    scale:0,
    duration:1,
    delay:.1,
    rotate:360
   
})
gsap.from(".page2 #circle",{
    scale:0,
    duration:1,
    delay:.1,
    rotate:360,
    scrollTrigger:{
        trigger:".page2 #circle",
        scroller:"body",
       
        start:"top 70%",
        end:"top 30%",
        scrub:1
    }
})

gsap.from(".page3 #circle",{
    scale:0,
    duration:1,
    delay:.1,
    rotate:360,
    scrollTrigger:{
        trigger:".page3 #circle",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:2
    }
    
})