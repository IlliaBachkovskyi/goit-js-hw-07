const inputRef = document.getElementById('name-input');
console.log(inputRef);

const strangerRef = document.getElementById('name-output');
console.log(strangerRef);

inputRef.oninput = function () {
    if (inputRef.value === "") {
        strangerRef.innerHTML = 'незнакомец';
    } else {
        strangerRef.innerHTML = inputRef.value;
    };
 };   