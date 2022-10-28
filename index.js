const userInput = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")

const lengthText = document.getElementById("length-text")
const volumeText = document.getElementById("volume-text")
const massText = document.getElementById("mass-text")

convertBtn.addEventListener("click", function () {
    let num = Number(userInput.value)

    if (!userInput.value) {
        lengthText.innerHTML = "-- meters = -- feet | -- feet = -- meters"
        volumeText.innerHTML = "-- liters = -- gallons | -- gallons = -- liters"
        massText.innerHTML = "-- kilograms = -- pounds | -- pounds = -- kilograms"
    } else {
        lengthText.innerHTML = `${num} meters = ${(num * 3.28084).toFixed(3)} feet | 
                                ${num} feet = ${(num / 3.28084).toFixed(3)} meters`

        volumeText.innerHTML = `${num} liters = ${(num * 0.264172).toFixed(3)} gallons | 
                                ${num} gallons = ${(num / 0.264172).toFixed(3)} liters`

        massText.innerHTML = `${num} kilograms = ${(num * 2.20462).toFixed(3)} pounds | 
                            ${num} pounds = ${(num / 2.20462).toFixed(3)} kilograms`
    }
})

