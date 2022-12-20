// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrement = document.querySelector('button[data-action = "decrement"]')
const increment = document.querySelector('button[data-action = "increment"]')
const result = document.querySelector('#value')

decrement.addEventListener('click', () => {
   counterValue -= 1;
   result.textContent = counterValue;
    })

increment.addEventListener('click', () => {
   counterValue += 1;
   result.textContent = counterValue;
})



