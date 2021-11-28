/*Wertzuweisung Sounds*/
var Aton = new Audio('assets/A.mp3');
var Cton = new Audio('assets/C.mp3');
var Fton = new Audio('assets/F.mp3');
var Gton = new Audio('assets/G.mp3');
var hihat = new Audio('assets/hihat.mp3');
var kick = new Audio('assets/kick.mp3');
var laugh1 = new Audio('assets/laugh-1.mp3');
var laugh2 = new Audio('assets/laugh-2.mp3');
var snare = new Audio('assets/snare.mp3');
let beat = ['assets/kick.mp3', 'assets/snare.mp3', 'assets/hihat.mp3'];
var key = 0;
/*Klicken*/
window.addEventListener('load', function () {
    document.querySelector('#btn').addEventListener('click', function () { playSample(Aton); });
    document.querySelector('#btn1').addEventListener('click', function () { playSample(Cton); });
    document.querySelector('#btn2').addEventListener('click', function () { playSample(Fton); });
    document.querySelector('#btn3').addEventListener('click', function () { playSample(Gton); });
    document.querySelector('#btn4').addEventListener('click', function () { playSample(hihat); });
    document.querySelector('#btn5').addEventListener('click', function () { playSample(kick); });
    document.querySelector('#btn6').addEventListener('click', function () { playSample(laugh1); });
    document.querySelector('#btn7').addEventListener('click', function () { playSample(laugh2); });
    document.querySelector('#btn8').addEventListener('click', function () { playSample(snare); });
    /*Drum Machine*/
    document.querySelector("#drumMachine").addEventListener('click', function () {
        setInterval(function playBeat() {
            var sequence = new Audio(beat[key]);
            sequence.play();
            key += 1;
            if (key > 3)
                key = 0;
        }, 480);
    });
});
/*Ton abspielen*/
function playSample(sound) {
    sound.play();
}
;
//# sourceMappingURL=script.js.map