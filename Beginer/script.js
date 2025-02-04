// gsap.to("#box",{

//     x:1000,
//     duration:3,
//     delay:1,
//     rotate:360,
//     backgroundColor:"green"
    
// })

gsap.from("#box",{
    x:1000,
    duration:3,
    delay:1,
    rotate:360,
   
})


const t =gsap.timeline()

t.to("#box1",{
    x:1000,
    duration:2,
    scale:.9,
    rotate:360,
    delay:1
})
t.to("#box2",{
    x:1000,
    duration:2,
    scale:.9,
    rotate:360,
    delay:1
})
t.to("#box3",{
    x:1000,
    duration:2,
    scale:.9,
    rotate:360,
    delay:1
})