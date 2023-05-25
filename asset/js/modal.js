import {gsap} from "gsap";
import {rotationTL} from "./rotation.js";

document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".planet");
    const pages = document.querySelectorAll(".page");
    const body = document.body
    const background = document.querySelector('.dark-background')


    planets.forEach((planet, index) => {
        const page = pages[index]
        const content = document.querySelectorAll('.content')
        const decoration = page.querySelector('.decorations')

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
        openTL.to(background, {
            duration: 1,
            width: '150%',
            opacity: 1,
        }, 0)
        openTL.to(page, {
            duration: 1,
            overflow: 'auto',
            visibility: 'visible',
        }, 1)
        openTL.to(content, {
            duration: 1,
            opacity: 1
        }, 2)
        openTL.to(decoration, {
            duration: 1,
            opacity: 1
        }, 2)

        // Close Timeline
        closeTL.to(background, {
            duration: 1,
            width: 0,
            opacity: 0
        }, 0)
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
        closeTL.to(content, {
            duration: 0.5,
            opacity: 0
        }, 0)
        closeTL.to(page, {
            duration: 0,
            overflow: 'hidden',
            visibility: 'hidden',
        }, 0)


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
