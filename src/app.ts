import { Task,  Category} from "./types/types";
import { render } from "./helpers/render-tasks.helper.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const btn: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");


const categories: Category[] = ["general", "work", "hobby"];

const tasks: Task[] = [
  { name: "Daj psu lekarstwo", done: false, category: "general"; },
  { name: "Weź Asamax", done: false, category: "general" },
  { name: "Zrób Duolingo", done: false, category: "hobby" },
  { name: "Zjedz śniadanie", done: false, category: "general" },
  { name: "Wypij yerbe/kawe", done: false, category: "general" },
  { name: "Dokończ zaczęte projekty", done: false, category: "work"},
];



const addTask = (task: Task) => {
  tasks.push(task);
};

btn.addEventListener("click", (event: Event) => {
  event.preventDefault();
  const selectedRadioElement: HTMLInputElement = document.querySelector("input[type=radio]:checked");
  const selectedCategory: Category = selectedRadioElement.value as Category;
  
  if(taskNameInputElement.value != "")
  {

  addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory });
  taskNameInputElement.value = "";
  render(tasks, tasksContainerElement);
  }
});


render(tasks, tasksContainerElement);
