const whatsapp = document.querySelector(".whatsapp-link")
const tooltip = document.querySelector(".tooltip")

whatsapp.addEventListener("click", () => {
    tooltip.style.visibility = "visible"
})

tooltip.addEventListener("click", ()=>{
    tooltip.style.visibility = "hidden"
})