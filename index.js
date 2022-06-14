const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');


btn.addEventListener('click', function(){
const item = document.createElement('li');
item.innerText = inputField.value;
item.classList.add('toDoAdded');
toDoContainer.appendChild(item);
})