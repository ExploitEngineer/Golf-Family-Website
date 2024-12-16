const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursorblur");
const h4All = document.querySelectorAll("#nav h5");

document.addEventListener("mousemove", function (det) {
    cursor.style.transform = `translate(${det.x}px, ${det.y}px)`;
    cursor.style.transition = "transform 0.6s ease-out";
    cursorBlur.style.transform = `translate(${det.x - 200}px, ${det.y - 200}px)`;
    cursorBlur.style.transition = "transform 0.5s ease-out";
});

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "70px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10px",
        end: "top -11px",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img, .about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3
    }
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})

gsap.from(["#colon1", "#colon2"], {
    y: (index) => (index === 0 ? -70 : 70),
    x: (index) => (index === 0 ? -70 : 70),
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 40%",
        end: "top 10%",
        scrub: 3
    }
});

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 70%",
        end: "top 70%",
        scrub: 3
    }
})
