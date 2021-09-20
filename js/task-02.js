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

const addLi = ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  ingredientsRef.append(item);
});

console.log(document.querySelectorAll('li'));