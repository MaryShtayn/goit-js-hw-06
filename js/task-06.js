// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputLength = event.currentTarget.value.length;
  const validLength = event.currentTarget.dataset.length;

  if (Number(inputLength) === Number(validLength)) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
    return;
  }

  event.currentTarget.classList.add('invalid');
  event.currentTarget.classList.remove('valid');
}
