const inputElement = document.querySelector("[type = 'text']");
console.log(inputElement)
const spanElement = document.querySelector("#name-output")

inputElement.addEventListener('input', onInputChange)

function onInputChange(event) {
    const input = event.currentTarget;

    spanElement.textContent = input.value ? input.value : 'незнакомец';
}