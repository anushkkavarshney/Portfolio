function setValues() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home span .child", { y: "100%" });
  gsap.set("#home .row img", { opacity: 0 });
}
function revealToSpan() {
  document.querySelectorAll(".reveal")
    .forEach(function (elem) {
      var parent = document.createElement("span");
      var child = document.createElement("span");

      parent.classList.add("parent");
      child.classList.add("child");

      // child.style.cssText = elem.style.cssText;
      child.innerHTML = elem.innerHTML;
      parent.appendChild(child);

      elem.innerHTML = "";
      elem.appendChild(parent);
    })
}
function loaderAnimation() {
  var tl = gsap.timeline();

  tl
    .to(".hide", {
      opacity: 1,
      duration: 0.1,
      delay: 0.1,
      ease: "power2.inOut"
    })
    .from(".child span", {
      x: "150px",
      stagger: .2,
      duration: 1,
      // delay: 1,
      ease: Power3.easeInOut
    })
    .to(".parent .child", {
      y: "-100%",
      duration: .5,
      // delay: 1,
      ease: Circ.easeInOut
    })

    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut
    })
    .to("#green", {
      height: "100%",
      duration: 2,
      delay: -2,
      top: 0,
      ease: Circ.easeInOut
    })
    .to("#green", {
      height: "0%",
      duration: 1,
      delay: -.7,
      // top:0,
      ease: Circ.easeInOut,
      // onComplete: function(){
      //   animateHomepage();
      // } 
    })

}
function animateSvg() {
  document.querySelectorAll("#Visual>g").forEach(function (e) {
    var character = e.childNodes[1];

    character.style.strokeDasharray = character.getTotalLength() + 'px';
    character.style.strokeDashoffset = character.getTotalLength() + 'px';

    gsap.to("Visual>g>path", {
      strokeOffset: 0,
      // strokeDasharray: 0,
      duration: 2,
      ease: Expo.easeInOut,
      delay: 5
    })

  })
}
function animateSvgPaths() {
  const paths = document.querySelectorAll(".c-visual svg path");

  if (paths.length === 0) {
    console.warn("No paths found in .c-visual SVG.");
    return;
  }

  paths.forEach((path, i) => {
    const length = path.getTotalLength();

    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "rgb(123, 229, 137)");
    path.setAttribute("stroke-width", "5");
    path.setAttribute("stroke-linecap", "round");

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 5,
      // delay: i * 0.05,
      ease: "sine.out"
    });
  });

  gsap.to(".c-visual svg", {
    opacity: 1,
    duration: 0.3
  });
}
function animateHomepage() {


  var tl = gsap.timeline();
  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: .05,
    delay: 1,
    ease: Circ.easeInOut
  })
  tl.to("#home .parent .child", {
    y: 0,
    // stagger: .1,
    duration: 1.5,
    delay: 1,
    ease: Circ.easeInOut
  })
  tl.to("#home .row img", {
    opacity: 1,
    delay: -.5,
    ease: Circ.easeInOut,
    onComplete: function () {
      animateSvgPaths();
    }
  })
  // tl.to("#home .reveal text .parent .child", {
  //   y: 0,
  //   stagger: .1,
  //   duration: 2.5,
  //   delay: 5,
  //   ease: Circ.easeInOut,
  //   onComplete: function(){
  //     alert("hey");
  //   }
  // })
}

function locoInitialize() {
  const scrollContainer = document.querySelector("#main");

  const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true
  });

  ScrollTrigger.scrollerProxy(scrollContainer, {
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
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed"
  });

  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
  gsap.to(t.selector, {
  rotate: t.to,
  scrollTrigger: {
    trigger: t.selector,
    scroller: "#main",   // 🔥 REQUIRED
    scrub: true,
    start: "top 90%",
    end: "top 20%"
    // markers: true
  }
});

}

function cardShow() {
  document.querySelectorAll(".proj")
    .forEach(function (cnt) {
      var showingImage;
      cnt.addEventListener("mousemove", function (dets) {
        document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
        showingImage = dets.target;
        document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        showingImage.style.filter = "grayscale(1)";

        document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
      })
      cnt.addEventListener("mouseleave", function (dets) {
        document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
        showingImage.style.filter = "grayscale(0)";
        document.querySelector("#work").style.backgroundColor = "#f2f2f2";
      })
      
    })
}
gsap.registerPlugin(ScrollTrigger);

  const targets = [
    { selector: ".imgcnt:nth-child(1)", from: -15, to: -40 },
    { selector: ".imgcnt:nth-child(2)", from: -5, to: -30 },
    { selector: ".imgcnt:nth-child(3)", from: 5, to: -20 },
  ];

  targets.forEach((t) => {
    // Optional: set initial state in JS instead of CSS
    gsap.set(t.selector, { rotate: t.from });

    gsap.to(t.selector, {
      rotate: t.to,
      scrollTrigger: {
        trigger: t.selector,
        //   start: "top 90%",
        //   end: "top 20%",
        scrub: true,
        // markers: true // enable if debugging
      }
    });
  });
gsap.registerPlugin(ScrollTrigger);

// // Loader simulation
// setTimeout(() => {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("main").classList.remove("hidden");
//   ScrollTrigger.refresh();
// }, 2500);

// Footer time
function updateTime() {
  document.getElementById("time").innerText =
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
updateTime();
setInterval(updateTime, 60000);

// // Example scroll animation
// gsap.from("#about h2", {
//   scrollTrigger: "#about",
//   y: 100,
//   opacity: 0,
//   duration: 1.2,
//   ease: "power3.out"
// });
// gsap.from(".toolset span", {
//   scrollTrigger: "#about",
//   y: 20,
//   opacity: 0,
//   stagger: 0.05,
//   duration: 0.8,
//   ease: "power3.out"
// });

// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".reveal").forEach(el => {
//   gsap.fromTo(
//     el,
//     { opacity: 0, y: 60 },
//     {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: el,
//         start: "top 85%",
//         toggleActions: "play none none reverse"
//       }
//     }
//   );
// });


window.addEventListener("load", () => {
  revealToSpan();
  setValues();
  loaderAnimation();
  // animateSvgPaths();
  animateHomepage();
  // animateSvg();
  locoInitialize();
  cardShow();
  // scrollTrigger();
});

