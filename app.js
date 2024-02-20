const form = document.querySelector('#todoform');
const newitem = document.querySelector('input[name="todo"]');
const todolist = document.querySelector('#todoList');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newtodo = document.createElement('li');
    newtodo.innerText = newitem.value + ' ';
    const removebtn = document.createElement('button');
    removebtn.innerText = 'Remove';
    newtodo.appendChild(removebtn);
    todolist.appendChild(newtodo);
    newitem.value = '';

    //local storage of list
    // let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
    // localStorage.setItem('items', JSON.stringify(itemsArray))
    // const data = JSON.parse(localStorage.getItem('items'))
    // itemsArray.push(todolist)
    // console.log(JSON.stringify(itemsArray))
    // localStorage.setItem('items', JSON.stringify(itemsArray))
});


todolist.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
    if (e.target.tagName === 'LI') {
        strike = document.createElement('s');
        console.log(strike)
        e.target.classList.toggle('completed');
    }
})

// const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
// console.log(savedTodos)
// localStorage.setItem("todos", JSON.stringify(savedTodos));
