import {gsap} from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";

// Import MotionPathPlugin used to follow ellipse path
gsap.registerPlugin(MotionPathPlugin);



// Set default position for planets
gsap.to("#planet0", {
    duration: 0,
    motionPath: {
        path: "#path",
        align: "#path",
        end: 0.25,
        alignOrigin: [0.5, 0.5],
    }
})

gsap.to("#planet1", {
    duration: 0,
    motionPath: {
        path: "#path",
        align: "#path",
        end: 0.5,
        alignOrigin: [0.5, 0.5]
    }
})

gsap.to("#planet2", {
    duration: 0,
    motionPath: {
        path: "#path",
        align: "#path",
        end: 0.75,
        alignOrigin: [0.5, 0.5]
    }
})

gsap.to("#planet3", {
    duration: 0,
    motionPath: {
        path: "#path",
        align: "#path",
        end: 1,
        alignOrigin: [0.5, 0.5]
    }
})


document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".planet")

    const tl = gsap.timeline()

    planets.forEach(planet => {
        const id = planet.dataset.value
        console.log(document.querySelector(`[data-value="${id}"]`))
        tl.to(`[data-value="${id}"]`, {
            duration: 15,
            ease: "none",
            repeat: -1,
            motionPath: {
                path: "#path",
                align: "#path",
                start: id * 0.25,
                end: (id * 0.25) + 1,
                alignOrigin: [0.5, 0.5]
            }
        }, 0)
        planet.addEventListener("click", () => {
            tl.pause()
        })
    })
})
