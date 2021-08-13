const elemCategories = document.querySelector('#categories');
//console.log(elemCategories);
const items = elemCategories.querySelectorAll('.item');
console.log(`В списке ${items.length} категории`);
console.log('');
//console.log(elemItems);
const titles = [];
items.forEach(elem => {
    console.log('Категория : ', elem.getElementsByTagName('h2')[0].textContent);
    console.log(
        'Количество эелментов : ',
        elem.getElementsByTagName('li').length
    );
    console.log('');
})