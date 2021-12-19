namespace Aufgabe10 {
    declare var Artyom: any;
    window.addEventListener('load', function () {

        //HTML Datei Wertezuweisung
        const todoInput = document.querySelector(".todo-input") as HTMLInputElement;
        const todoButton = document.querySelector(".todo-button");
        const todoList = document.querySelector(".todo-list");

        let countertotal: number = 0;
        let counteropen: number = 0;
        let counterdone: number = 0;

        let input: HTMLInputElement = document.querySelector("#textfield");

        //Klicken Funktion AddTodo
        todoButton.addEventListener("click", addTodo);

        //Aufgabenzähler
        function counterTotal() {
            document.querySelector("#countertotal").innerHTML = String(countertotal);
        };
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
        function addTodo(e: any) {

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
                todoList.removeChild(todoDiv); countertotal--; counterTotal();

                if (completedButton.checked === true) {
                    counterdone--;
                }
                else {
                    counteropen--;
                }
                counterOpen();
                counterDone();
            });
        
        completedButton.addEventListener("click", function (event: Event): void {
            let checken: boolean = completedButton.checked;
    
            if (checken === true) {
                counterdone++;
                counteropen--;
            } else {
                counterdone--;
                counteropen++;
            }
            counterOpen();
            counterDone();
    
            });

        
    let artyom: any = new Artyom();
    let mic: boolean = false;
    
    artyom.addCommands({
        // 
        indexes: ["Erstelle Aufgabe *"],
        smart: true,
        
        action: function(i: any, spracheingabe: string): void {
            input.value = spracheingabe;
            addTodo(e);
        }
    });

    // Fkt die Aufnehmen startet
    function voiceRecording(): void {
        artyom.fatality ();
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                });
            },
            250);
    }

    // Eventlistener für das Mikro 
    document.querySelector(".fa-microphone").addEventListener("click", function(): void {
        if (!mic) {
            voiceRecording();
            mic = true; 
        } else {
            artyom.fatality();
            mic = false;
        }
    });



        }


    })
}