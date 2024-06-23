gsap.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    borderRadius: "50%",
    repeat: -1,
    yoyo: true
})
gsap.from("#box2", {
    y: 100,
    duration: 2,
    delay: 1,
    borderRadius: "50%",
    repeat: -1,
    yoyo: true
})

// text animation
gsap.from("h1", {
    color: "red",
    duration: 2,
    opacity: 0,
    y: 20,
    // stagger: -1
    stagger: 0.3,
    repeat: -1,
    yoyo: true
})

let tl = gsap.timeline()

tl.to(".heading-1", {
    x: 100,
    duration: 1
})
tl.to(".heading-2", {
    x: 200,
    duration: 1
})
tl.to(".heading-3", {
    x: 300,
    duration: 1
})