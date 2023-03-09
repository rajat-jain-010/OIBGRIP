const input = document.querySelector('.input');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('operator')) {
            input.value += ` ${button.value} `;
        } else if (button.classList.contains('clear')) {
            input.value = '';
        } else if (button.classList.contains('calculate')) {
            input.value = eval(input.value);
        } else {
            input.value += button.value;
        }
    });
});
