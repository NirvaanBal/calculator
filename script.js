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
