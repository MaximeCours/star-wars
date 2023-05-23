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

function play(selectedPlanet) {
    let target = -selectedPlanet

    if (target === -3){
        target = 1
    }

    console.log(selectedPlanet, target)
    if (target === 0){
        return
    }
    gsap.to('[data-value="0"]', {
        duration: 2,
        motionPath: {
            path: "#path",
            align: "#path",
            start: 0.25,
            end: (target+1) * 0.25,
            alignOrigin: [0.5, 0.5],
        }
    })
    gsap.to('[data-value="1"]', {
        duration: 2,
        motionPath: {
            path: "#path",
            align: "#path",
            start: 0.50,
            end: (target+2) * 0.25,
            alignOrigin: [0.5, 0.5],
        }
    })
    gsap.to('[data-value="2"]', {
        duration: 2,
        motionPath: {
            path: "#path",
            align: "#path",
            start: 0.75,
            end: (target+3) * 0.25,
            alignOrigin: [0.5, 0.5],
        }
    })
    gsap.to('[data-value="3"]', {
        duration: 2,
        motionPath: {
            path: "#path",
            align: "#path",
            start: 1,
            end: (target+4) * 0.25,
            alignOrigin: [0.5, 0.5],
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".planet")

    function updateValues(selectedPlanet){
        planets.forEach(planet => {
            planet.dataset.value = ((planet.dataset.value-selectedPlanet+4)%4).toString()
        })
    }

    planets.forEach(planet => {
        planet.addEventListener("click", () => {
            // Update locations of planets
            play(planet.dataset.value)
            // Update planet selector for next interaction
            updateValues(planet.dataset.value)
        })
    })
})
