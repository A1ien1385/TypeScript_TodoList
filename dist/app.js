// <li>
//   <label for="task-1">Dać psu lekarstwa</label>
//   <input type="checkbox" name="Dać psu lekarstwa" id="task-1" />
// </li>;
const taskNameInput = document.querySelector("#name");
const btn = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const tasks = [
    "Dać psu lekarstwa",
    "Wziąć Asamax",
    "Zrobić lekcję Duolingo",
    "Zjeść śniadanie",
    "Wypić yerbe/kawę",
    "Pouczyć się programowania",
    "Porysować",
    "Pojechać po Karolinę",
    "Zagrać partyjkę w Elden Ring, albo poczytać Endymiona",
];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
btn.addEventListener("click", (Event) => {
    event.preventDefault();
    tasks.push(taskNameInput.value);
    taskNameInput.value = "";
    render();
});
render();
