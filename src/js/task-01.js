// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categorRef = document.querySelector('#categories')
const itemsLengthRef = categorRef.children.length
console.log(`В списке ${itemsLengthRef} категории.`)


const itemsRef = categorRef.querySelectorAll('.item')


itemsRef.forEach(nameItem =>
    
    console.log(`- Категория: ${nameItem.firstElementChild.textContent}
    - Количество элементов ${nameItem.lastElementChild.children.length}`))




