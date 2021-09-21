const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
  
const ingredientsRef = document.querySelector('#ingredients');
console.log(ingredientsRef);

ingredientsRef.style.listStyle = 'none';

const elementList = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
ingredientsRef.innerHTML = elementList;