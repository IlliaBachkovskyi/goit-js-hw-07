const inputRef = document.getElementById('font-size-control');
console.log(inputRef);

const textRef = document.getElementById('text');
console.log(textRef);

inputRef.addEventListener('input', onRange);

function onRange(e) {
    textRef.style.fontSize = `${e.target.value}px`;
};