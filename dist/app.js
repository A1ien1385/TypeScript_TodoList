// <li>
//   <label for="task-1">Dać psu lekarstwa</label>
//   <input type="checkbox" name="Dać psu lekarstwa" id="task-1" />
// </li>;
const taskNameInputElement = document.querySelector("#name");
const btn = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const tasks = [
    { name: "Daj psu lekarstwo", done: false },
    { name: "Weź Asamax", done: true },
    { name: "Zrób Duolingo", done: false },
    { name: "Zjedz śniadanie", done: true },
    { name: "Wypij yerbe/kawe", done: false },
];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
btn.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false });
    taskNameInputElement.value = "";
    render();
});
render();
