namespace Aufgabe09 {

    window.addEventListener('load', function () {

        //HTML Datei Wertezuweisung
        const todoInput = document.querySelector(".todo-input") as HTMLInputElement;
        const todoButton = document.querySelector(".todo-button");
        const todoList = document.querySelector(".todo-list");
        let Aufgabenzähler: number = 0;


        //Klicken Funktion AddTodo
        todoButton.addEventListener("click", addTodo);

        //Aufgabenzähler
        function counter() {
            document.querySelector("span").innerHTML = String(Aufgabenzähler);
        }

        //Damit 0 Aufgaben dasteht
        counter();

        //Functions
        function addTodo(e: any) {

            Aufgabenzähler++;
            counter();

            //prevent form from submitting
            e.preventDefault();

            //Todo DIV
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");

            //Erledigt Button
            let completedButton = document.createElement("button");
            completedButton.classList.add("complete-btn");
            completedButton.setAttribute("class", "far fa-square");
            todoDiv.appendChild(completedButton);

            //Listen Element, Eingabe
            const newTodo = document.createElement("li");
            newTodo.classList.add("todo-item");
            newTodo.innerHTML = todoInput.value;
            todoDiv.appendChild(newTodo);

            //Lösch Button
            const trashButton = document.createElement("button");
            trashButton.classList.add("trash-btn");
            trashButton.setAttribute("class", "fas fa-trash");
            todoDiv.appendChild(trashButton);

            //Div als Child von todoList
            todoList.appendChild(todoDiv);


            //ToDo Input nach eingabe leeren
            todoInput.value = "";

            //Klick Löschen von Aufgabe
            trashButton.addEventListener("click", function () {
                todoList.removeChild(todoDiv); Aufgabenzähler--; counter();
            });

            //Erledigt Button anklickbar
            completedButton.addEventListener("click", function () {
                if (completedButton.getAttribute("class") == "far fa-square") {
                    completedButton.setAttribute("class", "fa fa-check-square"); 
                }

                else {
                    (completedButton.getAttribute("class") == "far fa-check-square");
                    completedButton.setAttribute("class", "far fa-square");
                }

            });



        }


    })
}