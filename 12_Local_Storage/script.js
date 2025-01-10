const button = document.getElementById('clickButton');

const username = document.getElementById('username');

const nameField = document.getElementById('your-name');

button.addEventListener('click', () =>{
    // console.log(username.value);
    localStorage.setItem('name', username.value)
    // nameField.innerText = localStorage.getItem('name');
    location.reload();
})

window.addEventListener('load', () => {
    const yourName = localStorage.getItem('name');
    if (yourName === null) yourName = 'Guest User';
    nameField.innerText = yourName;
})