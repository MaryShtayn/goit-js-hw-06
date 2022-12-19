const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputLength = event.currentTarget.textContent.length;
    const validLength = event.currentTarget.dataset.length;
 
    if ( Number(inputLength) === Number(validLength)) {
        event.currentTarget.classList.add('.valid');
          
    }
    
    event.currentTarget.classList.add('.invalid');
    
}
