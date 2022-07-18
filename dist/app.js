import { render } from "./helpers/render-tasks.helper.js";
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
        render(tasks, tasksContainerElement);
    }
});
// addTask({name: "test", category: "general", done: false});
render(tasks, tasksContainerElement);
