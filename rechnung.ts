/*Afrika*/

var a : number = 1235.5;
var a_2008 : number = 1028;

/*Südamerika*/

var b : number = 1261.5;
var b_2008 : number = 1132.6;

/*Europa*/

var c : number = 4209.3;
var c_2008 : number = 4965.7;

/*Nordamerika*/

var d : number = 6035.6;
var d_2008 : number = 6600.4;

/*Asien*/

var e : number = 16274.1;
var e_2008 : number = 12954.7;

/*Australien*/

var f : number = 2100.5;
var f_2008 : number = 1993;

/*Gesamtemission*/

var A : number = a + b + c + d + e + f;



/*Rechnung Europa*/
/*Relativ zur Gesamtemisssion*/

var E : number = Math.round(100.0 * ((100/A)*c)) / 100.0;

/*Veränderung zu 2008*/

var EV : number = Math.round(100*(((c/c_2008)*100)-100))/100;

/*Diferenz zu 2008*/

var ED : number = Math.round(100*(c - c_2008))/100;

/*Europa Konsole*/

console.log('Die Emission von Europa ist: ' + c + 'kg CO2. Relativ zur Gesamtemmission der Welt verursacht Europa damit '
+ E '%. Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + EV + '% verändert. Im Vergleich zu 2008 sind das '
+ ED + 'kg CO2.');



/*Rechnung Nordamerika*/
/*Relativ zur Gesamtemisssion*/

var N : number = Math.round(100*((100/A)*d))/100;

/*Veränderung zu 2008*/

var NV : number = Math.round(100*(((d/d_2008)*100)-100))/100;

/*Diferenz zu 2008*/

var ND : number = Math.round(100* (d - d_2008))/100;

console.log('Die Emission von Nordamerika ist: ' + d + 'kg CO2. Relativ zur Gesamtemmission der Welt verursacht Nordamerika damit '
+ N '%. Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + NV + '% verändert. Im Vergleich zu 2008 sind das '
+ ND + 'kg CO2.');




/*Rechnung Südamerika*/
/*Relativ zur Gesamtemisssion*/

var S : number = Math.round(100*((100/A)*b))/100;

/*Veränderung zu 2008*/

var SV : number = Math.round(100*(((b/b_2008)*100)-100))/100;

/*Diferenz zu 2008*/

var SD : number = Math.round(100*(b - b_2008))/100;

console.log('Die Emission von Südamerika ist: ' + b + 'kg CO2. Relativ zur Gesamtemmission der Welt verursacht Südamerika damit '
+ S '%. Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + SV + '% verändert. Im Vergleich zu 2008 sind das '
+ SD + 'kg CO2.');



/*Rechnung Afrika*/
/*Relativ zur Gesamtemisssion*/

var AF : number = Math.round(100*((100/A)*a))/100;

/*Veränderung zu 2008*/

var AFV : number = Math.round(100*(((a/a_2008)*100)-100))/100;

/*Diferenz zu 2008*/

var AFD : number = Math.round(100*(a - a_2008))/100;

console.log('Die Emission von Afrika ist: ' + a + 'kg CO2. Relativ zur Gesamtemmission der Welt verursacht Afrika damit '
+ AF '%. Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + AFV + '% verändert. Im Vergleich zu 2008 sind das '
+ AFD + 'kg CO2.');


/*Rechnung Asien*/
/*Relativ zur Gesamtemisssion*/

var AS : number = Math.round(100*((100/A)*e))/100;

/*Veränderung zu 2008*/

var ASV : number = Math.round(100*(((e/e_2008)*100)-100))/100;

/*Diferenz zu 2008*/

var ASD : number = Math.round(100* (e - e_2008))/100;

console.log('Die Emission von Asien ist: ' + e + 'kg CO2. Relativ zur Gesamtemmission der Welt verursacht Asien damit '
+ AS '%. Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + ASV + '% verändert. Im Vergleich zu 2008 sind das '
+ ASD + 'kg CO2.');



/*Rechnung Australien*/
/*Relativ zur Gesamtemisssion*/

var AU : number = Math.round(100*((100/A)*f))/100;

/*Veränderung zu 2008*/

var AUV : number = Math.round(100*(((f/f_2008)*100)-100))/100;

/*Diferenz zu 2008*/

var AUD : number = Math.round(100*(f - f_2008))/100;

console.log('Die Emission von Australien ist: ' + f + 'kg CO2. Relativ zur Gesamtemmission der Welt verursacht Australien damit '
+ AU '%. Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + AUV + '% verändert. Im Vergleich zu 2008 sind das '
+ AUD + 'kg CO2.');
