const container = document.querySelector('.container');
const setup = document.querySelector('.setup');
const buttons = document.querySelectorAll('button');

setup.addEventListener('click', () => {
    for (i = 0; i < 30; i++) {
        const button = document.createElement('button');
        button.textContent = "Kevin Is Gay!";
        button.classList.add('fred');
        container.appendChild(button);
    }
});

buttons.forEach((button) => {

    button.addEventListener('mousedown', event => {
        if (event.button == 0) {
            button.style.backgroundColor = 'blue';
        } else if (event.button == 1) {
            button.style.backgroundColor = 'red';
        } else if (event.button == 2) {
            button.style.backgroundColor = 'green';        
        }
        
    });
}); 



