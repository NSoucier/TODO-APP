const form = document.querySelector('#todoform');
const newitem = document.querySelector('input[name="todo"]');
const todolist = document.querySelector('#todoList');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

//fill list with localStorage
if (!!(localStorage.items)) {
    let prev = JSON.parse(localStorage.items);
    for (let val of prev) {
        const newtodo = document.createElement('li');
        newtodo.innerText = val;
        const removebtn = document.createElement('button');
        removebtn.innerText = 'Remove';
        newtodo.appendChild(removebtn);
        todolist.appendChild(newtodo);
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newtodo = document.createElement('li');
    newtodo.innerText = newitem.value;
    const removebtn = document.createElement('button');
    removebtn.innerText = 'Remove';
    newtodo.appendChild(removebtn);
    todolist.appendChild(newtodo);

    //local storage of list
    itemsArray.push(newitem.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))

    newitem.value = '';
});


todolist.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        //deleate list from local storage
        let deleateTask = e.target.parentElement.innerText.slice(0,-6);
        console.log(deleateTask);
        let result = itemsArray.indexOf(deleateTask);
        console.log(result);
        let newlist = itemsArray.splice(result, 1);
        console.log(newlist);
        localStorage.setItem('items', JSON.stringify(itemsArray))
    }
    if (e.target.tagName === 'LI') {
        strike = document.createElement('s');
        e.target.classList.toggle('completed');
    }
}) 