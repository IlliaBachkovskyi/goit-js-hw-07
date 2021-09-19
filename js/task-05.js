const inputRef = document.getElementById('name-input');
console.log(inputRef);

const strangerRef = document.getElementById('name-output');
console.log(strangerRef);

inputRef.addEventListener('input', onInputValues);

function onInputValues(event) {
    if ("") {
        strangerRef.textContent = 'незнакомец';
    } else {
        strangerRef.textContent = event.target.value;
    };
    
    // strangerRef.textContent = "" ? 'незнакомец' : event.target.value;
};
    