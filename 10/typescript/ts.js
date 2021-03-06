var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", function () {
        //HTML Datei Wertezuweisung
        const todoInput = document.querySelector(".todo-input");
        const todoButton = document.querySelector(".todo-button");
        const todoList = document.querySelector(".todo-list");
        const artyom = new Artyom();
        let countertotal = 0;
        let counteropen = 0;
        let counterdone = 0;
        //Klicken Funktion AddTodo
        todoButton.addEventListener("click", addTodo);
        //Aufgabenzähler
        function counterTotal() {
            document.querySelector("#countertotal").innerHTML = String(countertotal);
        }
        ;
        function counterOpen() {
            document.querySelector("#counteropen").innerHTML = String(counteropen);
        }
        function counterDone() {
            document.querySelector("#counterdone").innerHTML = String(counterdone);
        }
        //Damit 0 Aufgaben dasteht
        counterTotal();
        counterOpen();
        counterDone();
        //Functions
        function addTodo(e) {
            countertotal++;
            counterTotal();
            counteropen++;
            counterOpen();
            //prevent form from submitting
            e.preventDefault();
            //Todo DIV
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");
            //Erledigt Button
            let completedButton = document.createElement("input");
            completedButton.classList.add("complete-btn");
            completedButton.type = "checkbox";
            completedButton.className = "checkBox";
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
                todoList.removeChild(todoDiv);
                countertotal--;
                counterTotal();
                if (completedButton.checked === true) {
                    counterdone--;
                }
                else {
                    counteropen--;
                }
                counterOpen();
                counterDone();
            });
            completedButton.addEventListener("click", function () {
                let checken = completedButton.checked;
                if (checken === true) {
                    counterdone++;
                    counteropen--;
                }
                else {
                    counterdone--;
                    counteropen++;
                }
                counterOpen();
                counterDone();
            });
            artyom.addCommands({
                indexes: ["erstelle Aufgabe *"],
                smart: true,
                action: function (i, wildcard) {
                    const newTodo = document.createElement("li");
                    newTodo.classList.add("todo-item");
                    newTodo.innerHTML = wildcard;
                    todoDiv.appendChild(newTodo);
                    function startContinuousArtyom() {
                        artyom.fatality();
                        setTimeout(function () {
                            artyom.initialize({
                                lang: "de-DE",
                                continuous: true,
                                listen: true,
                                interimResults: true,
                                debug: true
                            }).then(function () {
                                console.log("Ready!");
                            });
                        }, 250);
                    }
                    /*Spracheingabe durch Klick auf Button möglich*/
                    document.querySelector("#Artyom").addEventListener("click", function () {
                        startContinuousArtyom();
                    });
                }
            });
        }
    });
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=ts.js.map