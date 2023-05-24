import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js"; 

gsap.registerPlugin(ScrollTrigger);

let reveal = document.querySelectorAll(".page") 

reveal.forEach( (el) => {
    let headings = el.querySelectorAll("h2, p")
    
    let tl = gsap.timeline ()
    .from(headings, {y:80, stagger:0.05, opacity:0, duration:1, ease:"power3.out"})
    
    ScrollTrigger.create ({
        trigger: el,
        start: "center 100%", 
        end:"top 50%",
        markers: true,
        toggleActions: "play none none reverse ",
        animation:tl
    })
})
