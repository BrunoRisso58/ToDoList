class App {

    addTask() {
        try {
            if (document.querySelector("#task-name").value.trim() == "") {
                throw new Error("Você deve digitar o nome da tarefa!");
            }
            let taskName = document.querySelector("#task-name").value;

            let newTask = new Task(taskName);

            let list = document.querySelector(".tasks-list");
            document.querySelector(".section").appendChild(list);
            let listElement = document.createElement("li");
            listElement.setAttribute("class", "task-element")
            list.appendChild(listElement);
            let spanText = document.createElement("span");
            spanText.setAttribute("class", "list-item-text");
            listElement.appendChild(spanText);

            spanText.innerText = newTask.taskName;

            let spanButtons = document.createElement("span");
            spanButtons.setAttribute("class", "task-buttons");
            listElement.appendChild(spanButtons);

            let buttonDone = document.createElement("button");
            buttonDone.setAttribute("class", 'list-button button-done')
            buttonDone.setAttribute("onclick", "app.setDone(this)")
            buttonDone.innerText = "marcar como feita";
            spanButtons.appendChild(buttonDone);

            let buttonRemove = document.createElement("button");
            buttonRemove.setAttribute("class", "list-button button-remove");
            buttonRemove.setAttribute("onclick", "app.removeTask(this)")
            buttonRemove.innerText = "excluir";
            spanButtons.appendChild(buttonRemove);
        } catch(e) {
            alert(e.message);
        }

        document.querySelector("#task-name").value = "";
    }

    setDone(element) {
        let elementButton = element;
        let elementSpanButton = elementButton.parentNode;
        let elementLi = elementSpanButton.parentNode;
        let elementSpanText = elementLi.querySelector(".list-item-text");
        elementSpanText.style.textDecoration = "line-through";

        let buttonSet = elementSpanButton.querySelector(".button-done");
        buttonSet.innerText = "desmarcar";
        buttonSet.removeAttribute("onclick");
        buttonSet.setAttribute("onclick", "app.setUndone(this)");
    }

    setUndone(element) {
        let elementButton = element;
        let elementSpanButton = elementButton.parentNode;
        let elementLi = elementSpanButton.parentNode;
        let elementSpanText = elementLi.querySelector(".list-item-text");
        elementSpanText.style.textDecoration = "none";

        let buttonUnset = elementSpanButton.querySelector(".button-done");
        buttonUnset.innerText = "marcar como feita";
        buttonUnset.removeAttribute("onclick");
        buttonUnset.setAttribute("onclick", "app.setDone(this)");
    }

    removeTask(element) {
        let elementButton = element;
        let elementSpanButton = elementButton.parentNode;
        let elementToBeRemoved = elementSpanButton.parentNode;
        elementToBeRemoved.parentNode.removeChild(elementToBeRemoved);
    }

}

let app = new App();