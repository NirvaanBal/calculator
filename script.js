function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return Math.round(a / b);
}

function operate(action, a, b) {
    if (action === 'a') return add(a, b);
    else if (action === 's') return sub(a, b);
    else if (action === 'm') return mul(a, b);
    else if (action === 'd') return div(a, b);
}

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.numbers > button');

let value = '';
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        value += e.target.value;
        display.textContent = value;
    });
});

const addButton = document.getElementById('add');
const subButton = document.getElementById('sub');
const mulButton = document.getElementById('mul');
const divButton = document.getElementById('div');
let operation, value1, value2;

function action(btn) {
    btn.addEventListener('click', (e) => {
        value1 = +value;
        value = '';
        operation = e.target.value;
    });
}
action(addButton);
action(subButton);
action(mulButton);
action(divButton);

const equals = document.getElementById('equals');

equals.addEventListener('click', () => {
    value2 = +value;
    const result = operate(operation, value1, value2);
    display.textContent = result;
});
