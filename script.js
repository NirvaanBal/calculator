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
const numbers = document.querySelectorAll('.numbers > button');
const addButton = document.getElementById('add');
const subButton = document.getElementById('sub');
const mulButton = document.getElementById('mul');
const divButton = document.getElementById('div');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
let operation,
    value1,
    value2,
    result,
    divideByZero = false;

let value = '';
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        value += e.target.value;
        display.textContent = value;
    });
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
});

clear.addEventListener('click', () => {
    result = 0;
    display.textContent = result;
    value = '';
    value1 = value2 = undefined;
});
