const navBar =document.querySelectorAll(".nav_bar_content"); 
renderSectionGeneral()

navBar[0].addEventListener("click", renderSectionGeneral)
navBar[1].addEventListener("click",renderHabilitiesSection)
navBar[2].addEventListener("click",renderEducationSection)
navBar[3].addEventListener("click",renderProjectsSection)


function renderSectionGeneral(){
    updateNavBarState(navBar[0])
    const divInformationContainer = document.getElementById("information_container");

    
    divInformationContainer.innerHTML = `<section class="text_container">
                                    <p> Soy un estudiante de Ingeniería Informática en la Universidad Tecnológica de La Habana José Antonio Echeverría (CUJAE),
                                     actualmente cursando el 3er año. Me considero una persona curiosa y altamente lógica,
                                    cualidades que me impulsan a investigar constantemente cómo funcionan las cosas.</p>

                                    <br>

                                    <p>Aunque mi formación académica es integral, tengo un fuerte interés en el desarrollo web, la ciberseguridad y la industria de los videojuegos.
                                    Disfruto enfrentar problemas complejos y encontrar soluciones elegantes a través del código.
                                    Además de mis estudios, he participado activamente en competencias de programación y hackatones, donde he puesto a prueba mi capacidad de resolver problemas bajo presión y trabajar en equipo.
                                    Actualmente busco mi primera oportunidad profesional (pasantía) donde pueda aportar mis conocimientos, aprender de un equipo experimentado y seguir creciendo como desarrollador. </p>
                                    </section>`
    
    




}

function renderHabilitiesSection(){
    updateNavBarState(navBar[1])
    const divInformationContainer = document.getElementById("information_container")
    divInformationContainer.innerHTML = 
    `<section id=languajes_section> 
        <h2>Lenguajes y Herramientas</h2>
        <br>
        <div id= languajes_images_container>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600"><path fill="#000" d="M516.3 540 564.5 0h-529l48.1 540 216 60zm-310-363.4 6 67.8h241.4l-1.6 17.8-16.6 185.6L300 485.4h-.3L164 447.8l-9.3-104h66.5l4.7 52.8 73.8 20 74-20 7.6-86H151.8l-17.9-200.2h331.8l-6 66.2z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600"><path fill="#264DE4" d="m299.7 600-173.6-48.2L87.5 118h425l-38.7 433.8z"/><path fill="#2965F1" d="m440.7 524.1 33-370.7H300V563z"/><path fill="#EBEBEB" d="m176.1 314.3 4.8 53.2H300v-53.2zm-9.5-107.7 4.8 53.2H300v-53.2zM300 452.5h-.2l-59.3-16-3.8-42.4h-53.4l7.4 83.6 109 30.3.3-.1z"/><path fill="#000" d="M187.5 0H252v27h-37.5v27H252v26.9h-64.5zm77.3 0h64.5v23.4h-37.5v4.7h37.5v54h-64.5V57.3h37.5v-4.7h-37.5zm77.4 0h64.4v23.4h-37.5v4.7h37.5v54h-64.4V57.3h37.5v-4.7h-37.5z"/><path fill="#fff" d="m423.5 314.3 9.6-107.7H299.8v53.2h75l-4.8 54.5h-70.2v53.2h65.5l-6.1 69-59.4 16V508L409 477.7l.8-9 12.5-140z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600"><g clip-path="url(#devicon-javascript-1-a)"><path fill="#F7DF1E" d="M0 0h600v600H0z"/><path fill="#000" d="m157.8 501.4 45.9-27.8c8.8 15.7 16.9 29 36.2 29 18.5 0 30.2-7.2 30.2-35.4V275.5h56.4V468c0 58.4-34.2 85-84.2 85-45 0-71.2-23.4-84.5-51.6m199.3-6 46-26.6c12 19.7 27.7 34.2 55.5 34.2 23.4 0 38.3-11.7 38.3-27.8 0-19.3-15.3-26.2-41-37.4l-14.2-6c-40.7-17.4-67.6-39.1-67.6-85 0-42.3 32.2-74.6 82.5-74.6 35.9 0 61.6 12.5 80.2 45.1l-44 28.2c-9.6-17.3-20-24.1-36.2-24.1-16.5 0-27 10.4-27 24.1 0 17 10.5 23.8 34.7 34.3l14 6c48 20.6 75 41.5 75 88.6 0 50.8-39.9 78.6-93.5 78.6-52.3 0-86.1-25-102.7-57.6"/></g><defs><clipPath id="devicon-javascript-1-a"><path fill="#fff" d="M0 0h600v600H0z"/></clipPath></defs></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600"><path fill="#5382A1" d="M221.3 464s-23 13.3 16.3 17.9c47.5 5.4 71.8 4.6 124.2-5.3 0 0 13.8 8.6 33 16.1-117.4 50.3-265.8-3-173.5-28.7M207 398.3s-25.8 19 13.5 23.1c50.8 5.3 90.9 5.7 160.3-7.7 0 0 9.6 9.8 24.7 15-142 41.6-300.2 3.4-198.6-30.4"/><path fill="#E76F00" d="M327.9 286.9c29 33.3-7.6 63.3-7.6 63.3s73.5-38 39.7-85.4c-31.5-44.3-55.7-66.4 75.2-142.3 0 0-205.4 51.3-107.3 164.4"/><path fill="#5382A1" d="M483.3 512.6s17 14-18.7 24.8c-67.8 20.5-282.2 26.7-341.8.8-21.4-9.3 18.8-22.2 31.4-25 13.2-2.8 20.7-2.3 20.7-2.3-23.8-16.7-153.9 33-66 47.2 239.4 38.8 436.5-17.5 374.4-45.5m-251-182.3s-109 25.9-38.6 35.3c29.7 4 89 3 144.2-1.6 45.1-3.8 90.5-11.9 90.5-11.9s-16 6.8-27.5 14.7c-110.7 29.1-324.6 15.6-263-14.2 52-25.2 94.4-22.3 94.4-22.3M428 439.6c112.5-58.5 60.4-114.7 24.1-107.1a84 84 0 0 0-12.9 3.4s3.3-5.1 9.6-7.4c72-25.3 127.2 74.5-23.2 114 0 0 1.8-1.5 2.3-2.9"/><path fill="#E76F00" d="M360 0s62.4 62.4-59 158.3c-97.5 76.9-22.3 120.8-.1 170.9-56.9-51.3-98.6-96.5-70.6-138.5C271.3 129 385.2 99 360 0"/><path fill="#5382A1" d="M243.3 598.1c108.1 7 274-3.8 278-55 0 0-7.6 19.4-89.3 34.8-92.3 17.4-206 15.4-273.5 4.2 0 0 13.8 11.5 84.8 16"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600"><path fill="#00758F" d="m178.5 365.6 18.2 59.2a80 80 0 0 1 5.1 28.1q15-40 21-87.3h21.9q-14.2 77-37.3 111.8-18 27-39.6 26.9-5.7 0-14.1-3.5v-12.3q4.1.6 9.6.6 10 0 16.2-5.6 7.5-6.8 7.4-15.2 0-5.7-5.7-23.6l-25.5-79.1zM38.9 329.2l33.4 102h.2l33.6-102h27.5q9 75.9 10.7 138.7H121q-1.2-58.8-6.8-110.5h-.2L79 467.9H61.3l-35-110.5H26q-3.9 49.7-4.9 110.5H0q2.1-74 10.2-138.7z"/><path fill="#F29111" d="M413 327.2q54 0 54 68.8 0 37.5-16.2 56.5-3 3.4-6.4 6.2l25.4 12.6-9 15.5-33.1-19.3a64 64 0 0 1-18.1 2.5q-26.5 0-39.6-15.4-14.3-17.1-14.3-53.7 0-37.1 16.2-56.3a51 51 0 0 1 41.2-17.4m-110 .2q19.4 0 35.1 10.3l-5.3 11.9q-13.6-5.8-26.7-5.8-10.6 0-16.3 5.2a17 17 0 0 0-6.2 13.1q.2 12.3 16.6 21.4 4.6 2.4 10.6 5.8l.8.5.4.2.8.5.4.2.8.4 15.9 9c10.8 7.7 16.2 16 16.2 29.4q0 17.6-13 29a51 51 0 0 1-34.5 11.2 69 69 0 0 1-39.4-13l6-11.8q16.3 8.2 29.7 8.2 12.4 0 19.5-5.5a19 19 0 0 0 7.6-15.4c0-8.3-5.8-15.3-16.3-21.2l-9.8-5.5-.8-.5-4.4-2.5-.8-.4-13.3-7.6c-10.5-7.7-15.7-16-15.7-29.5q0-16.9 11.7-27.2 11.8-10.4 30.5-10.4m206.2 1.8V451H553v17h-65.7V329.2zM577.1 451v2.9h-4.8V468h-3.7v-14.1h-5V451zm8.8 0 4.6 11.6 4.3-11.6h5.2v17h-3.5v-13l-4.8 13h-2.5l-4.8-13h-.2v13h-3.3v-17zM411 344.2q-31.8 0-31.8 52.4 0 30 8.4 43.6 7.8 12.5 24.4 12.5 31.7 0 31.7-52.8 0-29.6-8.4-43.1-7.8-12.6-24.4-12.6"/><path fill="#00758F" d="M355.3 104.3c7-17.2 31.6-4.2 41.1 1.9 2.4 1.5 5 4.6 7.7 5.8l12.6.7c7.8 1.8 15.2 3.3 21.4 6.9a168 168 0 0 1 64.6 62.6c3.7 6 5.6 12.6 8.6 19.1 4.1 9.8 8.8 20 13.7 29.2 2.1 4.4 3.8 9.2 6.8 12.9 1.2 1.7 4.5 2.2 6.5 3.2 5.5 2.8 12.2 5 17.4 8.4 9.7 6 19 13.2 27.6 20.6 3.2 2.8 5.3 6.8 8.4 9.9v1.5l-8 2.3c-6 1.5-11.1 1.2-16.8 2.7-3.5 1-7.8 2.3-11.5 2.7l.3.3c2.2 6.2 13.9 11.2 19.2 15a80 80 0 0 1 17.4 16.8l5 4.9c1.2 1.7 1.5 3.9 2.7 5.4v.5a8 8 0 0 1-3.1-2.3l-.6-.5-1.6-1.6c-3.7-2.5-7.4-5.5-11-7.9-6.4-4-13.8-6.3-20.3-10.4q-5.5-3.5-10.7-7.7A39 39 0 0 1 544 297c-1.2-1.8-1.3-4-2.7-5.3.3-2.3 2.3-3 4.4-3.5l.5-.1 2-.6a77 77 0 0 1 32.4-4.7c-.5-3.4-8.8-7.6-11.5-9.6-5.4-3.8-11-7.9-16.7-11.4-3-1.8-8.2-3.2-11.6-4.7-4.5-1.8-14.5-3.7-17-7.2a92 92 0 0 1-10.3-18.8l-.8-1.8-.8-1.8c-3.5-8-7.8-16.4-11.3-24.7-1.9-4-2.7-7.5-4.7-11.3a149 149 0 0 0-52.2-57.4c-7.1-4.5-15.2-8.7-24-11.5-5-1.5-11-.7-16.4-1.9h-3.5c-3-.8-5.5-4-7.9-5.7a85 85 0 0 0-16.5-8.3c-2.2-1-8.4-3.4-10.5-1.5q-2 .3-2.4 2.1c-1.3 2-.1 5 .7 7 2.5 5.3 6 8.4 9.2 13 2.8 4 6.3 8.5 8.3 12.9 4.4 9.4 6.4 19.7 10.4 29.1 1.5 3.6 3.8 7.6 6 10.8 1.8 2.5 5.2 4.3 6.2 7.5 2 3.3-3 14.4-4.2 18a73 73 0 0 0 1.8 45.3l.3.6c1.8 4.4 3.7 9.1 8.6 10.3.3-.3 0-.1.7-.3 1.2-9.2 1.5-18.1 4.7-25.3 1.8-4.5 5.5-7.7 8-11.4 1.7 1 1.7 4 2.7 6a214 214 0 0 0 25.9 46.6c2.3 3.4 5.6 7 8.6 10 1.4 1.2 2.9 2 3.9 3.4h.3v.5c-5-1.8-8.2-7-12.2-10a96 96 0 0 1-21.7-22.5q-3.3-7-6.9-13.9v-.3c-1 1.3-.6 2.6-1.1 4.7-2.2 8.3-.5 17.9-8 20.9-8.6 3.5-15-5.7-17.6-9.9a74 74 0 0 1-4.8-56.3c1.3-4.2 1.5-9.2 3.8-12.5-.5-3-2.8-3.9-4.2-5.8a79 79 0 0 1-6.1-10.3c-3.6-7-6-15.1-8.7-22.5-1.2-3-1.5-6-2.7-8.9-2-4.3-5.7-8.7-8.5-12.5-3.9-5.6-15-16.3-10.6-27.2m54.8 32.8 1.6 1.3.7.4q1.4.9 2.3 2.2c.8 1.2 1 2.3 2 3.5q0 6-3.6 8.4l-.3.3-3.8-8c-1.7-2.3-4-4.2-5.4-6.9h-.3v-.3q2.8-.8 6.8-.9"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600"><g clip-path="url(#devicon-git-1-a)"><path fill="#2F2707" d="M359.6 260c-13.2 0-23 6.5-23 22 0 11.7 6.5 19.8 22.3 19.8 13.4 0 22.4-7.8 22.4-20.3 0-14-8-21.5-21.7-21.5m-26.3 109.8c-3.1 3.8-6.2 7.8-6.2 12.6 0 9.6 12.2 12.5 28.9 12.5 13.9 0 32.8-1 32.8-13.9 0-7.7-9.1-8.1-20.6-8.9zm70.8-109a38 38 0 0 1 8.8 24c0 26.6-20.8 42.2-51 42.2a76 76 0 0 1-18.8-2.2l-8 12.7 23.5 1.4c41.4 2.6 65.8 3.8 65.8 35.6 0 27.5-24.2 43-65.8 43-43.3 0-59.8-11-59.8-29.8 0-10.8 4.8-16.5 13.2-24.4a16 16 0 0 1-10.5-15.8c0-5.2 2.6-10 7-14.6q6.2-6.6 14.7-14.3c-11.7-5.8-20.5-18.2-20.5-35.9 0-27.5 18.1-46.4 54.7-46.4a82 82 0 0 1 22 2.4h46.7V259zm64-43.5c-13.6 0-21.5-8-21.5-21.6s7.9-21 21.5-21c13.9 0 21.8 7.4 21.8 21s-7.9 21.6-21.8 21.6M437.3 361v-19l12.2-1.6c3.3-.5 3.8-1.2 3.8-4.8v-70.3c0-2.6-.7-4.3-3.1-5l-13-4.5 2.7-19.4h49.5v99.2c0 3.9.2 4.3 3.8 4.8l12.2 1.7V361zm162.7-9.3a96 96 0 0 1-39 9.6c-28.4 0-39.2-11.5-39.2-38.5V260c0-1.4 0-2.4-2-2.4h-16.7v-21.3c21.1-2.4 29.5-12.9 32-39H558v34c0 1.7 0 2.4 2 2.4h33.6v24H558v57c0 14.2 3.4 19.7 16.3 19.7a57 57 0 0 0 19.3-3.9z"/><path fill="#DE4C36" d="M245.7 289 136.4 179.5a16 16 0 0 0-22.8 0l-22.8 22.7 28.8 28.8a19.1 19.1 0 0 1 24.3 24.4l27.8 27.8a19.2 19.2 0 1 1-11.5 10.8l-26-25.9v68.1q2.8 1.5 5.2 3.7a19.2 19.2 0 1 1-20.9-4.2V267a19 19 0 0 1-10.4-25.2l-28.4-28.3-75 75a16 16 0 0 0 0 22.8l109.4 109.3a16 16 0 0 0 22.8 0l108.8-108.8a16 16 0 0 0 0-22.9"/></g><defs><clipPath id="devicon-git-1-a"><path fill="#fff" d="M0 0h600v600H0z"/></clipPath></defs></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600"><mask id="devicon-visual-studio-code-5-a" width="600" height="598" x="0" y="1" maskUnits="userSpaceOnUse"><path fill="#fff" d="M425.5 595.9a37 37 0 0 0 29.7-1.1l123.6-59.5a38 38 0 0 0 21.2-33.8v-403c0-14.4-8.3-27.6-21.2-33.8L455.2 5.2a37 37 0 0 0-42.6 7.3L176.1 228.2l-103-78.1a25 25 0 0 0-31.9 1.4l-33 30a25 25 0 0 0 0 37L97.5 300 8.2 381.5a25 25 0 0 0 0 37l33 30a25 25 0 0 0 32 1.4l103-78.1 236.4 215.7q5.7 5.6 12.9 8.4M450 163.8 270.7 300 450 436.2z"/></mask><g mask="url(#devicon-visual-studio-code-5-a)"><path fill="#0065A9" d="M579.1 64.8 455.5 5.3a37 37 0 0 0-42.6 7.2L8.2 381.5a25 25 0 0 0 0 37l33 30a25 25 0 0 0 32 1.4L560.5 80.2a24.8 24.8 0 0 1 39.9 19.8v-1.4c0-14.4-8.3-27.6-21.3-33.8"/></g><mask id="devicon-visual-studio-code-6-b" width="600" height="598" x="0" y="1" maskUnits="userSpaceOnUse"><path fill="#fff" d="M425.5 595.9a37 37 0 0 0 29.7-1.1l123.6-59.5a38 38 0 0 0 21.2-33.8v-403c0-14.4-8.3-27.6-21.2-33.8L455.2 5.2a37 37 0 0 0-42.6 7.3L176.1 228.2l-103-78.1a25 25 0 0 0-31.9 1.4l-33 30a25 25 0 0 0 0 37L97.5 300 8.2 381.5a25 25 0 0 0 0 37l33 30a25 25 0 0 0 32 1.4l103-78.1 236.4 215.7q5.7 5.6 12.9 8.4M450 163.8 270.7 300 450 436.2z"/></mask><g mask="url(#devicon-visual-studio-code-6-b)"><path fill="#007ACC" d="m579.1 535.2-123.6 59.5a37 37 0 0 1-42.6-7.2L8.2 218.5a25 25 0 0 1 0-37l33-30a25 25 0 0 1 32-1.4l487.3 369.7a24.8 24.8 0 0 0 39.9-19.8v1.4c0 14.4-8.3 27.6-21.3 33.8"/></g><mask id="devicon-visual-studio-code-7-c" width="600" height="598" x="0" y="1" maskUnits="userSpaceOnUse"><path fill="#fff" d="M425.5 595.9a37 37 0 0 0 29.7-1.1l123.6-59.5a38 38 0 0 0 21.2-33.8v-403c0-14.4-8.3-27.6-21.2-33.8L455.2 5.2a37 37 0 0 0-42.6 7.3L176.1 228.2l-103-78.1a25 25 0 0 0-31.9 1.4l-33 30a25 25 0 0 0 0 37L97.5 300 8.2 381.5a25 25 0 0 0 0 37l33 30a25 25 0 0 0 32 1.4l103-78.1 236.4 215.7q5.7 5.6 12.9 8.4M450 163.8 270.7 300 450 436.2z"/></mask><g mask="url(#devicon-visual-studio-code-7-c)"><path fill="#1F9CF0" d="M455.1 594.8a37 37 0 0 1-42.6-7.3A22 22 0 0 0 450 572V28a22 22 0 0 0-37.5-15.5A37 37 0 0 1 455 5.3l123.6 59.4A38 38 0 0 1 600 98.5v403c0 14.5-8.3 27.6-21.3 33.9z"/></g><mask id="devicon-visual-studio-code-8-d" width="600" height="598" x="0" y="1" maskUnits="userSpaceOnUse"><path fill="#fff" d="M425.5 595.9a37 37 0 0 0 29.7-1.1l123.6-59.5a38 38 0 0 0 21.2-33.8v-403c0-14.4-8.3-27.6-21.2-33.8L455.2 5.2a37 37 0 0 0-42.6 7.3L176.1 228.2l-103-78.1a25 25 0 0 0-31.9 1.4l-33 30a25 25 0 0 0 0 37L97.5 300 8.2 381.5a25 25 0 0 0 0 37l33 30a25 25 0 0 0 32 1.4l103-78.1 236.4 215.7q5.7 5.6 12.9 8.4M450 163.8 270.7 300 450 436.2z"/></mask><g mask="url(#devicon-visual-studio-code-8-d)"><path fill="url(#devicon-visual-studio-code-9-e)" fill-opacity=".3" d="M425.5 595.9a37 37 0 0 0 29.7-1.1l123.6-59.5a38 38 0 0 0 21.2-33.8v-403c0-14.4-8.3-27.6-21.2-33.8L455.2 5.2a37 37 0 0 0-42.6 7.3L176.1 228.2l-103-78.1a25 25 0 0 0-31.9 1.4l-33 30a25 25 0 0 0 0 37L97.5 300 8.2 381.5a25 25 0 0 0 0 37l33 30a25 25 0 0 0 32 1.4l103-78.1 236.4 215.7q5.7 5.6 12.9 8.4M450 163.8 270.7 300 450 436.2z"/></g><defs><linearGradient id="devicon-visual-studio-code-9-e" x1="30000.1" x2="30000.1" y1="1.5" y2="59692.2" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs></svg>
            
        </div>                                
                                        
    </section>
    <section id="soft_skills_section" class="text_container">
        <h2>Soft Skills</h2>
        <br>
        
        <ul>
            <li><span>Resolución de problemas:</span> Capacidad para descomponer problemas complejos y encontrar soluciones lógicas</li>
            <li><span>Trabajo en equipo:</span>Experiencia colaborando en entornos de alta presión</li>
            <li><span>Aprendizaje rapido:</span> Facilidad para asimilar nuevas tecnologías y herramientas en poco tiempo.</li>
        </ul>
        
    
    </section>
    
    `
    
    

    
    
}
function renderEducationSection(){
    updateNavBarState(navBar[2])
    const divInformationContainer = document.getElementById("information_container")
    divInformationContainer.innerHTML=
    ` <section class = "text_container">
        <h2>Ingeniería Informática</h2>
        <br>
        <p>Universidad Tecnológica de La Habana José Antonio Echeverría (CUJAE) <br>
        Graduación estimada: 2028 | Actualmente en 3er año</p>
        <br><br>
        <p>Formación sólida en fundamentos de programación, algoritmos, estructuras de datos, bases de datos y desarrollo de software.</p>
      </section>

      <section class="text_container">
        <h2>Actividades Extracurriculares</h2>
        <br>
        <ul>
            <li>4to Lugar en Copa de Programación Universitaria</li>
            <li>Participante en Hackathon de Avangenio</li>
        </ul
      </>
      
      `



}

function renderProjectsSection() {
   
    updateNavBarState(navBar[3]); 
    
    const divInformationContainer = document.getElementById("information_container");
    
    divInformationContainer.innerHTML = `
      <section class="text_container">
        <h2>Sistema de Gestión de Inventario</h2>
        <br>
        <p><strong>Tecnologías:</strong> HTML5, CSS3, JavaScript</p>
        <br>
        <p>Desarrollo de la interfaz visual y la lógica del lado del cliente para un sistema de gestión de inventario. Implementación de operaciones dinámicas, manipulación del DOM y diseño responsivo para una experiencia de usuario fluida.</p>
        <br>
        <p><strong>Habilidades destacadas:</strong> Trabajo en equipo, resolución de problemas lógicos, desarrollo frontend y adaptabilidad a nuevas tecnologías web.</p>
      </section>

      <section class="text_container">
        <h2>Sistema de Gestión de Ofertas de Empleo</h2>
        <br>
        <p><strong>Tecnologías:</strong> Java</p>
        <br>
        <p>Aplicación de escritorio desarrollada 100% en Java para la administración de vacantes y postulantes. Diseño de la arquitectura lógica, manejo de colecciones y estructuras de datos para garantizar la eficiencia del sistema.</p>
        <br>
        <p><strong>Habilidades destacadas:</strong> Trabajo en equipo, Programación Orientada a Objetos (POO), pensamiento lógico, gestión de bases de datos y estructuración de código limpio.</p>
      </section>
    `;
}
function updateNavBarState(nav){
    navBar.forEach(nav =>nav.classList.remove("active"))
    nav.classList.add("active")
}
