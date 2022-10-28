const userInput = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")

const lengthText = document.getElementById("length-text")
const volumeText = document.getElementById("volume-text")
const massText = document.getElementById("mass-text")

convert()

function convert() {
    let num = Number(userInput.value)

    if (!userInput.value) {
        num = 1
    }
        
    lengthText.innerHTML = `${num} meters = ${(num * 3.28084).toFixed(3)} feet | 
                            ${num} feet = ${(num / 3.28084).toFixed(3)} meters`

    volumeText.innerHTML = `${num} liters = ${(num * 0.264172).toFixed(3)} gallons | 
                            ${num} gallons = ${(num / 0.264172).toFixed(3)} liters`

    massText.innerHTML = `${num} kilograms = ${(num * 2.20462).toFixed(3)} pounds | 
                        ${num} pounds = ${(num / 2.20462).toFixed(3)} kilograms`
    
}

convertBtn.addEventListener("click", convert)

// Stretch Goal Code//

userInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        convert();
    }
});

