const quantity = document.getElementById('categories').getElementsByClassName('item').length
console.log(`В списке ${quantity} категории`)

//2 способ
//console.log(document.getElementsByClassName('item').length)



const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});