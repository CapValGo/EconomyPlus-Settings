function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

class InputMoney extends HTMLElement {  
    constructor() {
        super()
        let name = this.getAttribute("name")
        const info = this.getAttribute("info")
        const key = this.getAttribute("key")
        const defaultValue = Number(this.getAttribute("default"))

        if (name == null)
            name = key

        let moneyIcon = sessionStorage.getItem("ep.MoneyIcon")
        if (moneyIcon == null)
            moneyIcon = "$"

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

        const inputContainer = document.createElement("div")
        inputContainer.className = "horizontal-container"

        const icon = document.createElement("div")
        icon.className = "icon icon-left"
        icon.textContent = moneyIcon

        const text = document.createElement("h3")
        text.textContent = name
        text.className = "text"

        const inlineContainer = document.createElement("div")
        inlineContainer.className = "inline-container"

        const input = document.createElement("input")
        input.onkeypress = onlyNumberKey
        input.className = "input-field input-field-left"

        let value = sessionStorage.getItem(key)
        if (value == null) {
            value = defaultValue ?? 0
            sessionStorage.setItem(key, value)
        }
        input.value = value

        input.addEventListener("change", function onKeyClicked() {
            if (input.value == "" || input.value == undefined)
                input.value = 0
            sessionStorage.setItem(key, input.value)
        })

        tooltip.appendChild(infoText)
        infoContainer.appendChild(infoTooltipLeft)
        infoTooltipLeft.appendChild(tooltipIcon)
        infoTooltipLeft.appendChild(tooltip)
        container.appendChild(infoContainer)
        inlineContainer.appendChild(inputContainer)
        inputContainer.appendChild(icon)
        inputContainer.appendChild(input)
        container.appendChild(text)
        container.appendChild(inlineContainer)
        this.appendChild(container)
    }
}
customElements.define('input-money', InputMoney);