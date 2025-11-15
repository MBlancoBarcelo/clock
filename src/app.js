import Alarm from "./Alarm.js";
import Clock from "./Clock.js";
import Stopwatch from "./Stopwatch.js";
import Timer from "./Timer.js";

customElements.define("x-alarm", Alarm);
customElements.define("x-clock", Clock);
customElements.define("x-stopwatch", Stopwatch);
customElements.define("x-timer", Timer);



const botonesnavbar = document.querySelectorAll(".quitador")
console.log(botonesnavbar)

botonesnavbar.forEach((element) => {
    console.log(element.getAttribute("id"))
    element.addEventListener("click", (event) => {
        console.log(event.target);
        botonesnavbar.forEach((element) => {
            element.classList.remove("activado")
        })
        element.classList.add("activado")
    })
})


