const taskNameInputElement = document.querySelector("#name");
const btn = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categories = ["general", "work", "hobby"];
const tasks = [
    { name: "Daj psu lekarstwo", done: false, category: "general" },
    { name: "Weź Asamax", done: false, category: "general" },
    { name: "Zrób Duolingo", done: false, category: "hobby" },
    { name: "Zjedz śniadanie", done: false, category: "general" },
    { name: "Wypij yerbe/kawe", done: false, category: "general" },
    { name: "Dokończ zaczęte projekty", done: false, category: "work" },
];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.title = task.name;
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
    const selectedRadioElement = document.querySelector("input[type=radio]:checked");
    const selectedCategory = selectedRadioElement.value;
    if (taskNameInputElement.value != "") {
        addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory });
        taskNameInputElement.value = "";
        render();
    }
});
// addTask({name: "test", category: "general", done: false});
render();
