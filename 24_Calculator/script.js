const result_tab = document.getElementById('result');
const semi_result_tab = document.getElementById('semi-result');

const operations = ['+', '-', '*', '/'];
let total_expression = "";
let expression = "";
let lastInput = null;



const getLastInputAfterBackspace = () => {
    const len = total_expression.length;
    if (len == 0) return null;
    return total_expression[len - 1];
}

const removeLastElement = ()=>{
    total_expression=total_expression.slice(0,-1);
    result_tab.value=result_tab.value.slice(0,-1);
}

const evaluateTotalExpression = () => {
    const res = eval(total_expression);
    return parseFloat(res.toFixed(10));
}

const getSemiResultTabValue = () => {
    let res = evaluateTotalExpression();
    if (!Number.isNaN(Number(res))) {
        semi_result_tab.value = res;
    }
    return semi_result_tab.value;
}

const isOperation = (chr) => {
    return operations.indexOf(chr) != -1;
}

const isDecimalPresent = () => {
    return expression.indexOf('.') != -1;
}

function handleClickButton(el) {
    const val = el.target.innerText;
    if (val === 'C') {
        result_tab.value = null;
        semi_result_tab.value = null;
        expression = "";
        total_expression = "";
        lastInput = null;
    }
    else if (val === '=') {
        result_tab.value = evaluateTotalExpression(total_expression);
        semi_result_tab.value = getSemiResultTabValue();
        expression = result_tab.value;
        total_expression = result_tab.value
        lastInput = null;
    }
    else if (val === '⌫') {
        if (total_expression == null) return;
        removeLastElement();
        lastInput = getLastInputAfterBackspace();
        semi_result_tab.value = getSemiResultTabValue();

    }
    else if (val === '.')
    {
        if (isDecimalPresent()) return;
        else {
            expression += ".";
            result_tab.value += ".";
            total_expression += ".";
        }
        lastInput = val;
    }
    else {
        if (isOperation(val)) {
            if (isOperation(lastInput)) {
                removeLastElement();
            }
            expression = "";
            total_expression += val;
            result_tab.value += val;
        }
        else {
            expression += val;
            result_tab.value += val;
            total_expression += val;
            semi_result_tab.value = getSemiResultTabValue();
        }
        lastInput = val;
    }
    console.log(result_tab.value);

    // console.log(val);
}

const cal_buttons = document.querySelectorAll('.col');

for (const cal_button of cal_buttons) {
    cal_button.addEventListener('click', handleClickButton);
}