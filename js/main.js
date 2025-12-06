const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');
// Радиокнопки
const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');
//Чекбоксы
const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');


// console.log(radioType);

const basePrice = 6000;
const totalPriceElement = document.querySelector('#total-price');

squareRange.addEventListener('input', function() {
    squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', function() {
    squareRange.value = squareInput.value;
})


function calculate() {
 let totalPrice = basePrice * parseInt(squareInput.value);
//форматирование отображения цены

for (const radio of radioType) {
    if (radio.checked) {
        totalPrice = totalPrice * parseFloat(radio.value);
        // console.log(totalPrice);
    }
}
for (const radio of radioBuilding) {
    if (radio.checked) {
        totalPrice = totalPrice * parseFloat(radio.value);
        // console.log(totalPrice);
    }
}
for (const radio of radioRooms) {
    if (radio.checked) {
        totalPrice = totalPrice * parseFloat(radio.value);
        // console.log(totalPrice);
    }
}

if (ceilings.checked) {
    // totalPrice *= parseFloat(ceilings.value);

    totalPrice = totalPrice + parseFloat(ceilings.value)*parseInt(squareInput.value);
}

if (walls.checked) {
    totalPrice *= parseFloat(walls.value);
}

if (floor.checked) {
    totalPrice *= parseFloat(floor.value);
}

 const formatter = new Intl.NumberFormat('ru');
 totalPriceElement.innerText = formatter.format(totalPrice);
//  console.log(totalPrice);
}
calculate();

for (const input of inputs) {
    input.addEventListener('input', function () {
       calculate();
    });
}