const amountCategories = document.querySelectorAll('.item');
console.log(`В списке ${amountCategories.length} категории.`);

const element = document.querySelectorAll('.item');
element.forEach(elem => (console.log(`Категория: ${elem.children[0].textContent};`),
console.log(`Количество элементов: ${elem.children[1].children.length}.`)));
