function buttonToggled(button, value) {
    if (value == 0) {
        button.textContent = "False"
        button.classList.add("off");
        button.classList.remove("on");
    } else {
        button.textContent = "True"
        button.classList.add("on");
        button.classList.remove("off");
    }
}

class ToggleButton extends HTMLElement {  
    constructor() {
        super()
        let name = this.getAttribute("name")
        const info = this.getAttribute("info")
        const key = this.getAttribute("key")
        const defaultValue = Number(this.getAttribute("default"))

        if (name == null)
            name = key
        
        const infoContainer = document.createElement("div")
        infoContainer.className = "info"

        const infoTooltipLeft = document.createElement("div")
        infoTooltipLeft.className = "info-tooltip left"

        const tooltipIcon = document.createElement("i")
        tooltipIcon.className = "bx bx-message-rounded-detail"

        const tooltip = document.createElement("div")
        tooltip.className = "tooltip"

        const infoText = document.createElement("p")
        infoText.textContent = info

        const container = document.createElement("div")
        container.className = "container"

        const text = document.createElement("h3")
        text.textContent = name
        text.className = "text"

        const button = document.createElement("button")
        button.className = "button"

        let value = sessionStorage.getItem(key)
        if (value == null) {
            value = defaultValue ?? 0
            sessionStorage.setItem(key, value)
        }
        buttonToggled(button, value)    

        button.addEventListener("click", function onButtonClicked() {
            if (value == 0)
                value = 1
            else
                value = 0

            buttonToggled(button, value)    
            sessionStorage.setItem(key, value)
        })

        tooltip.appendChild(infoText)
        infoContainer.appendChild(infoTooltipLeft)
        infoTooltipLeft.appendChild(tooltipIcon)
        infoTooltipLeft.appendChild(tooltip)
        container.appendChild(infoContainer)
        container.appendChild(text)
        container.appendChild(button)
        this.appendChild(container)
    }
}
customElements.define('toggle-button', ToggleButton);
