class App {

    addTask() {
        let taskName = document.querySelector("#task-name").value;
        let newTask = new Task(taskName);

        let list = document.querySelector(".tasks-list");
        document.querySelector(".section").appendChild(list);
        let listElement = document.createElement("li");
        listElement.setAttribute("class", "task-element")
        list.appendChild(listElement);

        listElement.innerText = newTask.taskName;

        let buttonDone = document.createElement("button");
        buttonDone.setAttribute("class", 'list-button button-done')
        buttonDone.innerText = "marcar como feita";
        listElement.appendChild(buttonDone);

        let buttonRemove = document.createElement("button");
        buttonRemove.setAttribute("class", "list-button button-remove");
        buttonRemove.innerText = "excluir";
        listElement.appendChild(buttonRemove);

        document.querySelector("#task-name").value = "";
    }

}

let app = new App();