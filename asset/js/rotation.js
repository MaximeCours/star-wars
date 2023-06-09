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

export const rotationTL = gsap.timeline()

document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".planet")

    planets.forEach(planet => {
        const id = planet.dataset.value

        // Apply animation to all planets
        rotationTL.to(`[data-value="${id}"]`, {
            duration: 50,
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

        // Add event listener to all planets
        planet.addEventListener("click", () => {
            rotationTL.pause()
        })
    })
})
