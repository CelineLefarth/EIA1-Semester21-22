var names: string[] = ["Ben", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo"];
var index: 0;


window.addEventListener('load', function (){

    document.querySelector("span").innerHTML = names.length + "";

});


window.addEventListener('load', function (){

    document.querySelector("#buttonAufsteigend").addEventListener('click', buttonAufsteigendClicked);
    document.querySelector("#buttonAbsteigend").addEventListener('click', buttonAbsteigendClicked);
    document.querySelector("#buttonAlleNamenaußer").addEventListener('click', buttonAlleNamenaußerClicked);
});


function buttonAufsteigendClicked () {

    document.querySelector('#liste').innerHTML='';

    for (var index: number = 0; index < names.length; index++) {
        document.querySelector('#liste').innerHTML += "<p>" + names[index];        
    }
};

function buttonAbsteigendClicked () {

    document.querySelector('#liste').innerHTML='';

    for (var index: number = names.length -1 ; index >= 0; index--) {
        document.querySelector('#liste').innerHTML += "<p>" + names[index];        
    }
};

function buttonAlleNamenaußerClicked() {
    document.querySelector("#liste").innerHTML = "";
    
    for (var index: number = 0; index < names.length; index++) {
    
    if(names[index] != "Lea" && names[index] != "Paul" && names[index] != "Ben") {
    document.querySelector("#liste").innerHTML += "<p>" + names[index] + "</p>";
    }
    }
    }