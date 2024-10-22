document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const todoList = document.getElementById('todoList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            const label = document.createElement('label');
            label.textContent = taskText;

            li.appendChild(checkbox);
            li.appendChild(label);

            todoList.appendChild(li);

            taskInput.value = ''; // Clear the input field
        }
    });

    // Allow pressing Enter to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });

    // Optional: Allow removing tasks
    todoList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LABEL') {
            e.target.parentElement.remove();
        }
    });
});
