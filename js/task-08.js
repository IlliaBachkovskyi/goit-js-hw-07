const createBtnRef = document.querySelectorAll('#controls button')[0];
const clearBtnRef = document.querySelectorAll('#controls button')[1];
const boxesRef = document.getElementById('boxes');
console.log(createBtnRef);
console.log(clearBtnRef);
console.log(boxesRef);
const size = {
    width: 30,
    heigth: 30,
};
createBtnRef.addEventListener("click", getAmount);
clearBtnRef.addEventListener("click", destroyBoxes);

function getAmount() {
    const amount = document.querySelector("#controls input").value;
    createBoxes(amount);
  }

function createBoxes(amount) {
    const {width, heigth } = size;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i+=1) {
        const widthSize = width + i * 10;
        const heigthSize = heigth + i * 10;
        const div = document.createElement("div");
        div.style.cssText = `width: ${widthSize}px; height: ${heigthSize}px; background-color: rgb( ${random()} , ${random()} , ${random()} )`;
        fragment.appendChild(div);
    }
    boxesRef.appendChild(fragment);
  }
  
function destroyBoxes() {
    boxesRef.innerHTML = "";
  }

function random() {
  return Math.floor(Math.random() * 256);
}