// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// 

const inputEl = document.querySelector('#validation-input')
console.log(inputEl)
const inputLength = inputEl.getAttribute('data-length')
console.log(inputLength)

inputEl.addEventListener('blur', function (event) {
    if (+inputLength === event.currentTarget.value.length) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
})