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
    return (a / b).toFixed(1);
}

function operate(action, a, b) {
    if (action === 'a') return add(a, b);
    else if (action === 's') return sub(a, b);
    else if (action === 'm') return mul(a, b);
    else if (action === 'd') return div(a, b);
}

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.num');
const dot = document.getElementById('dot');
const addButton = document.getElementById('add');
const subButton = document.getElementById('sub');
const mulButton = document.getElementById('mul');
const divButton = document.getElementById('div');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const back = document.querySelector('.back');
let operation,
    value1,
    value2,
    result,
    divideByZero = false,
    previousValue = 0;

let value = '';
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        value += e.target.value;
        display.textContent = value;
    });
});

dot.addEventListener('click', () => {
    value += '.';
    display.textContent = value;
    dot.disabled = true;
});

function action(btn) {
    btn.addEventListener('click', (e) => {
        if (!value) return;
        if (value1) {
            value2 = value;
            if (+value === 0 && operation === 'd') {
                display.textContent = 'Cannot divide by zero';
                value1 = value2 = result = operation = undefined;
                value = '';
                return;
            }
            result = operate(operation, +value1, +value2);
            value1 = result;
            value = '';
            display.textContent = result;
        } else {
            value1 = +value;
            operation = e.target.value;
            value = '';
        }

        operation = e.target.value;
    });
}
action(addButton);
action(subButton);
action(mulButton);
action(divButton);

equals.addEventListener('click', () => {
    if (!value) return;
    value2 = value;
    if (+value === 0 && operation === 'd') {
        display.textContent = 'Cannot divide by zero';
        value1 = value2 = result = operation = undefined;
        value = '';
        return;
    }
    result = operate(operation, +value1, +value2);
    value1 = result;
    value = '';
    display.textContent = result;
    dot.disabled = false;
});

clear.addEventListener('click', () => {
    result = 0;
    display.textContent = result;
    value = '';
    value1 = value2 = undefined;
    dot.disabled = false;
});

back.addEventListener('click', () => {
    value = value.slice(0, -1);
    display.textContent = value;
});

window.addEventListener('keydown', (e) => {
    if (
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '0'
    ) {
        value += e.key;
        display.textContent = value;
    }
});
