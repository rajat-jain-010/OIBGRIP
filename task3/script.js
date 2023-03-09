const taskInput = document.getElementById('taskInput');
const pendingTasksList = document.getElementById('pendingTasksList');
const completedTasksList = document.getElementById('completedTasksList');

function addTask() {
    const task = taskInput.value;
    if (task) {
        const li = document.createElement('li');
        const taskText = document.createTextNode(task);
        li.appendChild(taskText);

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');

        const completeButton = document.createElement('button');
        completeButton.innerText = 'Complete';
        completeButton.addEventListener('click', completeTask);
        actionsDiv.appendChild(completeButton);

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', editTask);
        actionsDiv.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', deleteTask);
        actionsDiv.appendChild(deleteButton);

        li.appendChild(actionsDiv);
        pendingTasksList.appendChild(li);

        taskInput.value = '';
    }
}

function completeTask() {
    const li = this.parentNode.parentNode;
    li.classList.add('complete');
    completedTasksList.appendChild(li);
    const actionsDiv = li.querySelector('.actions');
    actionsDiv.parentNode.removeChild(actionsDiv);
}

function deleteTask() {
    const li = this.parentNode.parentNode;
    li.parentNode.removeChild(li);
}

function editTask() {
    const li = this.parentNode.parentNode;
    const taskText = li.firstChild;
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = taskText.textContent;
    li.insertBefore(editInput, taskText);
    li.removeChild(taskText);
    const editButton = li.querySelector('.actions button:nth-of-type(2)');
    editButton.innerText = 'Save';
    editButton.removeEventListener('click', editTask);
    editButton.addEventListener('click', saveTask);
}

function saveTask() {
    const li = this.parentNode.parentNode;
    const editInput = li.querySelector('input');
    const taskText = document.createTextNode(editInput.value);
    li.insertBefore(taskText, editInput);
    li.removeChild(editInput);
    const editButton = li.querySelector('.actions button:nth-of-type(2)');
    editButton.innerText = 'Edit';
    editButton.removeEventListener('click', saveTask);
    editButton.addEventListener('click', editTask);
}

