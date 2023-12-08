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

const allNavH5 = document.querySelectorAll("#nav h5");

allNavH5.forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        crsr.style.scale = 2;
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "1px solid #95c11e";
    })
    elem.addEventListener("mouseleave", () => {
        crsr.style.scale = 1;
        crsr.style.backgroundColor = "#95c11e";
        crsr.style.border = "0px solid #95c11e";
    })
})

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

gsap.from('#about-us,#about-us-in',{
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 0.6,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
});

gsap.from(".card", {
    scale: 0.8,
    opacity:0.7,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 75%",
      end: "top 65%",
      scrub: 1,
    },
  });