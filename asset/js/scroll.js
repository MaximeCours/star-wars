import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);


const pages = document.querySelectorAll(".page")

pages.forEach((page) => {
    let reveal = page.querySelectorAll(".content")
    reveal.forEach( (el) => {
        let headings = el.querySelectorAll("h2, p")
    
        let tl = gsap.timeline ()
        .from(headings, {y:80, stagger:0.05, opacity:0, duration:1, ease:"power3.out"})
    
        ScrollTrigger.create ({
            scroller: page,
            trigger: el,
            start: "30% 100%",
            end:"top 50%",
            toggleActions: "play none none reverse ",
            animation:tl
        })
    })
})

