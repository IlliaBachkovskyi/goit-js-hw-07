const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
  
const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);
const addLi = ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient
  ingredientsEl.appendChild(item);
  // item.textContent = ingredient;
});
console.log(document.querySelectorAll('li'));
// ingredientsEl.appendChild(addLi);
// document.createElement()