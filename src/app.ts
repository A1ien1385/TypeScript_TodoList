const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const btn: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");


type Category = "general" | "work" | "hobby" | "other";

interface Task {
  name: string;
  done: boolean;
  category?: Category;
}



const categories: Category[] = ["general", "work", "hobby"];

const tasks: Task[] = [
  { name: "Daj psu lekarstwo", done: false, category: "general"; },
  { name: "Weź Asamax", done: false, category: "general" },
  { name: "Zrób Duolingo", done: false, category: "hobby" },
  { name: "Zjedz śniadanie", done: false, category: "general" },
  { name: "Wypij yerbe/kawe", done: false, category: "general" },
  { name: "Dokończ zaczęte projekty", done: false, category: "work"},
];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    
    if (task.category)
    {taskElement.classList.add(task.category)}

    const id: string = `task-${index}`;
    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
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
  render();
  }
});

// addTask({name: "test", category: "general", done: false});
render();
