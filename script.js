const crsr = document.querySelector("#cursor");
const crsrBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    crsrBlur.style.left = dets.x - 200 + "px";
    crsrBlur.style.top = dets.y - 200 + "px";
});

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "5.5em",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller:"body",
        // markers: true,
        start:"top -11%",
        end:"top -11%",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub: 2
    }
});