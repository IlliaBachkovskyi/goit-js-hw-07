const inputRef = document.getElementById('validation-input');
console.log(inputRef);

inputRef.addEventListener('blur', onCountSymbol);

function onCountSymbol(e) {
    const maxLength = inputRef.getAttribute('data-length');
    const fildVal = e.target.value;
    if (fildVal.length > maxLength || fildVal.length < maxLength) {
        inputRef.classList.add('invalid');
    } else if (fildVal.length == maxLength) {
        inputRef.classList.add('valid')
    };
};
console.log(inputRef.getAttribute('data-length'));