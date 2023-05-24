import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js"; 

gsap.registerPlugin(ScrollTrigger);

gsap.to(".title", {scrollTrigger: {
    trigger: ".title",
    start: "top +50%",
    end: "bottom",
    markers: true,
}, duration: 3, x: "95vw"})