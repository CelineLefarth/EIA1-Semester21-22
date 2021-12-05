namespace Aufgabe08 {
/*Wertzuweisung Sounds*/

var Aton : HTMLAudioElement =new Audio('assets/A.mp3');
var Cton : HTMLAudioElement =new Audio('assets/C.mp3');
var Fton : HTMLAudioElement =new Audio('assets/F.mp3');
var Gton : HTMLAudioElement =new Audio('assets/G.mp3');
var hihat : HTMLAudioElement =new Audio('assets/hihat.mp3');
var kick : HTMLAudioElement =new Audio('assets/kick.mp3');
var laugh1 : HTMLAudioElement =new Audio('assets/laugh-1.mp3');
var laugh2 : HTMLAudioElement =new Audio('assets/laugh-2.mp3');
var snare : HTMLAudioElement =new Audio('assets/snare.mp3');


/*Arrays*/
let audio: HTMLAudioElement[] = [kick, snare, hihat, Aton, Cton, Fton, Gton, laugh1, laugh2];
var remix : number;
var beatmix : number;


/*Klicken*/

window.addEventListener('load', function (){
    
    document.querySelector('#btn').addEventListener('click', function () {playSample (snare)});
    document.querySelector('#btn1').addEventListener('click', function () {playSample (hihat)});
    document.querySelector('#btn2').addEventListener('click', function () {playSample (kick)});
    document.querySelector('#btn3').addEventListener('click', function () {playSample(Aton)});
    document.querySelector('#btn4').addEventListener('click', function () {playSample(Cton)});
    document.querySelector('#btn5').addEventListener('click', function () {playSample (Fton)});
    document.querySelector('#btn6').addEventListener('click', function () {playSample (Gton)});
    document.querySelector('#btn7').addEventListener('click', function () {playSample (laugh1)});
    document.querySelector('#btn8').addEventListener('click', function () {playSample (laugh2)});
    
    
    document.querySelector("#play").addEventListener('click', function (){playstop()});
    document.querySelector("#delete").addEventListener('click', function (){deletebutton()});
    document.querySelector("#random").addEventListener('click', function (){remixbutton()});
    
    
 /*Ton abspielen*/
function playSample (sound : HTMLAudioElement) : void {
    sound.play();
};

/* Schleife Beat*/
function playBeat (){
    for(var i : number = 0; i <= 2; i++){
        playSample(audio[i]);
    };
};

/*Stop und PlayButton */
function playstop() :void {

    if (document.querySelector("#play").getAttribute("class") == "far fa-play-circle"){
        document.querySelector("#play").setAttribute("class", "far fa-stop-circle");
        beatmix=setInterval(playBeat, 280);
        clearInterval(remix); //Damit der remix button nicht läuft während der play button geklickt wird
    }
    
    else{ (document.querySelector("#play").getAttribute("class") == "far fa-stop-circle");
         document.querySelector("#play").setAttribute("class", "far fa-play-circle");
        clearInterval(beatmix);
        }       
                    
    }

/*remix button*/
function remixbutton () :void {
    
    /*Damit der Play button nicht läuft während der remix button geklickt wird*/
    
    clearInterval (beatmix);

    if (document.querySelector("#play").getAttribute("class") == "far fa-stop-circle"){
        document.querySelector("#play").setAttribute("class", "far fa-play-circle");
    }

    /*Remix*/

    remix=setInterval(playRemix, 280);
    
    function playRemix(){
        for(var a:number=0; a<9; a++){
            const b: number = Math.ceil(Math.random() * 9);
            playSample (audio[b]);
        };
    };
};

/*delete button*/
function deletebutton () :void {
    clearInterval(remix);
    clearInterval(beatmix);

    if (document.querySelector("#play").getAttribute("class") == "far fa-stop-circle"){
        document.querySelector("#play").setAttribute("class", "far fa-play-circle");
    }
    
    };

})}