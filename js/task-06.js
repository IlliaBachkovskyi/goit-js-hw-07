const inputRef = document.getElementById('validation-input');
console.log(inputRef);

inputRef.addEventListener('blur', onCountSymbol);

function onCountSymbol(e) {
    const maxLength = inputRef.getAttribute('data-length');
    const fildVal = e.target.value;
if (fildVal.length == maxLength) {
    if (inputRef.classList.contains("invalid"))
        inputRef.classList.replace("invalid", "valid");
        inputRef.classList.add("valid");
  } else {
    if (inputRef.classList.contains("valid"))
        inputRef.classList.replace("valid", "invalid");
        inputRef.classList.add("invalid");
    }
};