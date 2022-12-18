const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', onInputChange);

    function onInputChange(event) {
       
        if (input.textContent === '') {
         output.textContent = "Anonymous";
    }
   output.textContent = event.currentTarget.value;
}




