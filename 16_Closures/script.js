const myName = document.getElementById('my-name');

const size12_btn = document.getElementById('size-12');
const size24_btn = document.getElementById('size-24');
const size36_btn = document.getElementById('size-36');
const size48_btn = document.getElementById('size-48');

const getButton = (size) =>{
    const size_btn = document.createElement('button');
    size_btn.setAttribute('id', `size-${size}`);
    size_btn.innerText = `${size}`
    return size_btn;
}


function makeTextSizer(size) {
    function changeSize() {
        console.log("changed");
        myName.style.fontSize = `${size}px`;
    }
    return changeSize;
}


let size12 = makeTextSizer(12);
let size24 = makeTextSizer(24);
let size36 = makeTextSizer(36);
let size48 = makeTextSizer(48);

const standardSizes = [12, 24, 36, 48];
const standardSizeButtons = [{ 'button': size12_btn, 'fn':size12}, { 'button': size24_btn, 'fn': size24 }, { 'button': size36_btn, 'fn': size36 }, { 'button': size48_btn, 'fn':size48}];


window.addEventListener('load', () => {

    standardSizes.forEach((size) => {
        standardSizeButtons.push({ 'button': getButton(size), 'fn': makeTextSizer(size) });
    });


    standardSizeButtons.forEach((standardSize) => {
        standardSize.button.addEventListener('click', standardSize.fn);
    })
})



const sizeInput = document.getElementById('font-size-input');
const btn = document.getElementById('btn');

const size_bar = document.getElementById('size-bar');


btn.addEventListener('click', () => {

    let font_size = parseInt(sizeInput.value);
    if (Number.isNaN(font_size) || !isNumericValue(font_size)) {
        alert("Enter numeric value!!");
        return;
    }
    if (font_size <= 0 || font_size>100) {
        alert("Enter a positive value between 1 to 100");
        return;
    }
    let fn_sizeChanger = makeTextSizer(font_size);
    fn_sizeChanger();
})

const addSizeButton = document.getElementById('add-size-btn');
const newStandardSizeInput = document.getElementById('new-size');

function isNumericValue(size) {
    return typeof(size) == "number";
}

function extractSizeFromButton(button) {
    // size50_btn
    let button_name = button.id;
    let hyphenIndex = button_name.indexOf('-');
    return parseInt(button_name.substr(4, hyphenIndex - 4));
}

function sizeAlreadyExist(inputSize) {

    for (let i = 0; i < standardSizes.length; i++)
    {
        if (standardSizes[i] == inputSize) return true;
    }
    return false;

    // if sorted
    // let len = standardSizeButtons.length;
    // let lo = 0;
    // let hi = len - 1;
    // while (lo <= hi) {
    //     let mid = Math.floor((lo + hi) / 2);
    //     let currentButton = standardSizeButtons[mid].button;
    //     let standardSize = extractSizeFromButton(currentButton);
    //     if (inputSize == standardSize) {
    //         return true;
    //     }
    //     else if (inputSize < standardSize) {
    //         hi = mid - 1;
    //     }
    //     else lo = mid + 1;
    // }
    // return false;
    
}

// function sortArrayBasedOnSize(standardSizeButtons)
// {
//     standardSizeButtons.sort((a, b) => {
//         let size_a = extractSizeFromButton(a.button);
//         let size_b = extractSizeFromButton(b.button);
//         if (size_a < size_b) return -1;
//         if (size_a > size_b) return 1;
//         return 0;
//     });
// }

addSizeButton.addEventListener('click', () => {
    let size = parseInt(newStandardSizeInput.value);
    if (Number.isNaN(size) || !isNumericValue(size)) {
        alert("Enter numeric value!!");
        return;
    }
    if (size <= 0 || size>100) {
        alert("Enter a positive value between 1 to 100");
        return;
    }
    if (sizeAlreadyExist(size)) {
        alert(`${size} already exist`);
        return;
    }
    var inputSize_fn = makeTextSizer(size);

    let newStandardSizeButton = getButton(size);

    size_bar.appendChild(newStandardSizeButton);
    newStandardSizeButton.addEventListener('click', inputSize_fn);

    // let buttonObj = { 'button': newStandardSizeButton, 'fn': inputSize_fn };
    
    // standardSizeButtons.push(buttonObj);
    standardSizes.push(size);
    console.log(standardSizeButtons);

})






// // // const init = ()=>{
// // //     let name = 'Mozilla';
// // //     const displayName = () => {
// // //         console.log(name);
// // //     }
// // //     displayName();
// // // }
// // // init();


// // // const main = (name) => {
// // //     function sayMyName() {
// // //         console.log(name);
// // //     }
// // //     return sayMyName;
// // // }

// // // let consoleRitik = main("Ritik");

// // // consoleRitik();
// // // consoleRitik();
// // // consoleRitik();


// // // const adder = (num) => {
// // //     function add(val) {
// // //         console.log(num + val);
// // //     }
// // //     return add;
// // // }

// // // let addTo5 = adder(5);
// // // let addTo8 = adder(8);

// // // addTo5(10);
// // // addTo8(12);

