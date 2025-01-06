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

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && input.value.trim() !== '') {
        const task = input.value.trim();
        addTask(task);
        input.value = '';
    }
});