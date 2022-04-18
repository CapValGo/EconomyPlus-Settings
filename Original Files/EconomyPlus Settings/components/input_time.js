function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function updateTime(input, formatSelect, key) {
    if (input.value == "" || input.value == undefined)
        input.value = 0

    let formatValue = input.value

    switch(formatSelect.value) {
        case "s": formatValue *= 20; break
        case "m": formatValue *= 20*60; break
        case "h": formatValue *= 20*60*60; break
        case "d": formatValue *= 20*60*60*24; break
    }

    sessionStorage.setItem(key, formatValue)
}

class InputTime extends HTMLElement {  
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

        const inputContainer = document.createElement("div")
        inputContainer.className = "horizontal-container"

        const inlineContainer = document.createElement("div")
        inlineContainer.className = "inline-container"

        const text = document.createElement("h3")
        text.textContent = name
        text.className = "text"

        const formatSelect = document.createElement("select")
        formatSelect.className = "icon icon-right icon-time"
        const options = ["t", "s", "m", "h", "d"]
        for (const option of options) {
            const optionElement = document.createElement("option")
            optionElement.value = option
            optionElement.text = option
            formatSelect.appendChild(optionElement)
        }

        const input = document.createElement("input")
        input.onkeypress = onlyNumberKey
        input.className = "input-field input-field-right"

        let value = sessionStorage.getItem(key)
        if (value == null) {
            value = defaultValue ?? 0
            sessionStorage.setItem(key, value)
        }
        input.value = value

        input.addEventListener("change", () => updateTime(input, formatSelect, key))
        formatSelect.addEventListener("change", () => updateTime(input, formatSelect, key))

        tooltip.appendChild(infoText)
        infoContainer.appendChild(infoTooltipLeft)
        infoTooltipLeft.appendChild(tooltipIcon)
        infoTooltipLeft.appendChild(tooltip)
        container.appendChild(infoContainer)
        inlineContainer.appendChild(inputContainer)
        inputContainer.appendChild(input)
        inputContainer.appendChild(formatSelect)
        container.appendChild(text)
        container.appendChild(inlineContainer)
        this.appendChild(container)
    }
}
customElements.define('input-time', InputTime);