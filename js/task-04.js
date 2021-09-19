const counterValueRef = document.querySelector('#value');

let counterValue = 0;
 
const decrementRef = document.querySelector('[data-action="decrement"]');
console.log(decrementRef);
const incrementRef = document.querySelector('[data-action="increment"]');
console.log(incrementRef);

const decrement = () => {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
};

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);
