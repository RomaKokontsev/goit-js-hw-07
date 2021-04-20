// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-action="render"]')
console.log(createBtn)
const deletBtn = document.querySelector('[data-action="destroy"]')
console.log(deletBtn)
const boxesContainer = document.querySelector('#boxes')
console.log(boxesContainer)
const maxValue = +inputEl.getAttribute('max')
console.log(maxValue)

createBtn.addEventListener('click', onCreateBtnClick)
deletBtn.addEventListener('click',onDeleteBtnClick)


function onCreateBtnClick() {
    const value = +inputEl.value
    createBoxes(value)
}



function createBoxes(amount) {
    const arr = []

    for (let i = 0; i < amount; i += 1) {
        if (amount <= maxValue) {
            boxesContainer.innerHTML = '';

            const rgbColors = Array.from('rgb').map(() => {
                return Math.floor(Math.random() * 255)
            });
           
            
            const divEl = document.createElement("div");
            const style = `width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: rgb(${rgbColors}); margin-top: 10px;`
            divEl.setAttribute('style', style);
            
            arr.push(divEl);
        } else {

            boxesContainer.innerHTML = 'Количество боксов не должно превышать 100';
        }
    }

    boxesContainer.append(...arr)
}

function onDeleteBtnClick() {
    boxesContainer.innerHTML = "";
    inputEl.value = "";
}