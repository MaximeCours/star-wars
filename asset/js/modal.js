import {gsap} from "gsap";
import {rotationTL} from "./rotation.js";

document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".planet");
    const pages = document.querySelectorAll(".page");
    const body = document.body

    planets.forEach((planet, index) => {
        const page = pages[index]
        const content = page.children[0]

        const openTL = gsap.timeline({
            paused: true
        })

        const closeTL = gsap.timeline({
            paused: true
        })

        // Open Timeline
        openTL.to(planet, {
            top: '50%',
            left: '50%',
            transform: "translate(-50%, -50%)",
            duration: 1,
            zIndex: 8,
            width: '100%',
            height: '100vh',
        }, 0)
        openTL.to(page, {
            duration: 1,
            visibility: 'visible',
            width:'100%',
            height: '100vh',
            opacity: 1
        }, 1)
        openTL.to(page, {
            duration: 1,
            borderRadius: 0
        }, 2)
        openTL.to(content, {
            duration: 1,
            visibility: 'visible'
        }, 2)

        // Close Timeline
        closeTL.to(planet, {
            top: null,
            left: null,
            duration: 1,
            zIndex: 5,
            width: 200,
            height: 200,
        }, 0)
        closeTL.to(page, {
            duration: 0.5,
            opacity: 0
        }, 0)
        closeTL.to(content, {
            duration: 0.5,
            visibility: 0
        }, 0)
        closeTL.to(page, {
            duration: 1,
            visibility: 'hidden',
            width: 0,
            height: 0,
            borderRadius: '50%'
        }, 1)

        planet.addEventListener("click", () => {
            if(body.classList.contains('open-card')){
                closeTL.restart()
                body.classList.remove('open-card')
                rotationTL.play()
            }else{
                openTL.restart()
                body.classList.add('open-card')
            }
        })
    })

})
