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



