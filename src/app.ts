// <li>
//   <label for="task-1">Dać psu lekarstwa</label>
//   <input type="checkbox" name="Dać psu lekarstwa" id="task-1" />
// </li>;

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const tasks: string[] = [
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
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = task;
    tasksContainerElement.appendChild(taskElement);
  });
};

render();
