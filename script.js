const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTask(){
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
}