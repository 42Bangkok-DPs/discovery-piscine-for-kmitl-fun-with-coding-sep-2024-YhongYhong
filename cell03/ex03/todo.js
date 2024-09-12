const list = document.getElementById("ft_list");
let TodoList = [];

window.onload = function () {
    let save = getCookie('todoList');
    if (save) {
        TodoList = JSON.parse(save);
        render();
    }
};

function addTask(taskText) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.textContent = taskText;

    taskDiv.addEventListener("click", function() {
        const confirmDelete = confirm("Do you really want to remove this TO DO?");
        if (confirmDelete) {
            removeTask(taskText);
        }
    });

    return taskDiv;
}

function render() {
    list.innerHTML = '';
    for (let index = 0; index < TodoList.length; index++) {
        const taskDiv = addTask(TodoList[index]);
        list.append(taskDiv);
    }
    saveTasks();
}

function saveTasks() {
    document.cookie = "todoList=" + JSON.stringify(TodoList) + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

document.getElementById("new").addEventListener("click", function() {
    let name = prompt("Enter your TO DO:");
    if (name) {
        TodoList.unshift(name);
        render();
    }
});

function removeTask(taskText) {
    TodoList = TodoList.filter(task => task !== taskText);
    render();
}
