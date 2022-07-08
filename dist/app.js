// <li>
//   <label for="task-1">Dać psu lekarstwa</label>
//   <input type="checkbox" name="Dać psu lekarstwa" id="task-1" />
// </li>;
const taskNameInput = document.querySelector("#name");
const btn = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const tasks = [
    { name: "Daj psu lekarstwo", done: false },
    { name: "Weź Asamax", done: true },
    { name: "Zrób Duolingo", done: false },
];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task.name;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
btn.addEventListener("click", (Event) => {
    event.preventDefault();
    addTask(taskNameInput.value);
    taskNameInput.value = "";
    render();
});
render();
