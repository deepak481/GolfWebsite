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
    duration: 1.5,
    stagger: 0.3,
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
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
    //   markers:true,
      start: "top 85%",
      end: "top 75%",
      scrub: 1,
    },
  });

gsap.from("#colon1", {
    y: -50,
    x: -50,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 61%",
        end: "top 51%",
        scrub: 4
    }
  })

gsap.from("#colon2", {
    y: 50,
    x: 50,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 90%",
        scrub: 4
    }
  })

  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
    //   markers:true,
      start: "top 90%",
      end: "top 85%",
      scrub: 3,
    },
  });