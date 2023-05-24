import {gsap} from "gsap";
import {rotationTL} from "./rotation.js";

document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".planet");
    const pages = document.querySelectorAll(".page");
    const body = document.body
    const pageContent = document.querySelector('.dark-background')


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
            duration: 0,
            zIndex: 5,
        }, 0)
        openTL.to(planet, {
            top: '50%',
            left: '50%',
            transform: "translate3d(-50%, -50%, 0)",
            duration: 1,
            width: '100%',
            height: '100vh',
            borderRadius: 0,
        }, 0)
        openTL.to(pageContent, {
            duration: 1,
            visibility: 'visible',
            width: '100%',
            height: '100vh',
            opacity: 1
        }, 0)
        openTL.to(pageContent, {
            duration: 1,
            borderRadius: 0,
        }, 1)
        openTL.to(page, {
            duration: 1,
            overflow: 'auto',
            visibility: 'visible',
        }, 1)
        openTL.to(content, {
            duration: 1,
            opacity: 1
        }, 2)

        // Close Timeline
        closeTL.to(planet, {
            top: null,
            left: null,
            duration: 1,
            width: 200,
            height: 200,
        }, 0)
        closeTL.to(planet, {
            zIndex: 1,
            duration: 0,
        }, 1)
        closeTL.to(pageContent, {
            duration: 0.5,
            opacity: 0
        }, 0)
        closeTL.to(content, {
            duration: 0.5,
            opacity: 0
        }, 0)
        closeTL.to(page, {
            duration: 0,
            overflow: 'hidden',
            visibility: 'hidden',
        }, 0)
        closeTL.to(pageContent, {
            duration: 1,
            visibility: 'hidden',
            width: 0,
            height: 0,
            borderRadius: '50%'
        }, 1)


        planet.addEventListener("click", () => {
            if (openTL.isActive() || closeTL.isActive()){
                return
            }
            openTL.restart()
            body.dataset.modal = planet.dataset.value

        })
        page.addEventListener("click", () => {
            if (openTL.isActive() || closeTL.isActive()){
                return
            }
            openTL.paused()
            closeTL.restart()
            body.dataset.modal = ""
            rotationTL.play()
        })
    })

})
