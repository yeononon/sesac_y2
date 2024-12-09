function cal() {
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const operator = document.getElementById('operator').value.trim();
    const resultvalue = document.getElementById('result');

    let result = 0;
    switch (operator) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            result = value1 / value2;
            break;
    }
    resultvalue.value = result;
}

function resetInput() {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('operator').value = '';
    document.getElementById('result').value = '';
}
