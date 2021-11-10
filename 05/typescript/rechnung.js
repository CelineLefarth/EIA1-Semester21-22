/*Afrika*/
var a = 1235.5;
var a_2008 = 1028;
/*Südamerika*/
var b = 1261.5;
var b_2008 = 1132.6;
/*Europa*/
var c = 4209.3;
var c_2008 = 4965.7;
/*Nordamerika*/
var d = 6035.6;
var d_2008 = 6600.4;
/*Asien*/
var e = 16274.1;
var e_2008 = 12954.7;
/*Australien*/
var f = 2100.5;
var f_2008 = 1993;
/*Gesamtemission*/
var A = a + b + c + d + e + f;
/*Rechnung Europa*/
/*Relativ zur Gesamtemisssion*/
var E = Math.round(100.0 * ((100 / A) * c)) / 100.0;
/*Veränderung zu 2008*/
var EV = Math.round(100 * (((c / c_2008) * 100) - 100)) / 100;
/*Diferenz zu 2008*/
var ED = Math.round(100 * (c - c_2008)) / 100;
/*Europa Konsole*/
console.log('Die Emission von Europa ist: ' + c + 'kg CO2. Relativ zur Gesamtemmission der Welt verursacht Europa damit '
    + E + '%.');
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + EV + '% verändert.');
console.log('Im Vergleich zu 2008 sind das ' + ED + 'kg CO2.');
/*Rechnung Nordamerika*/
/*Relativ zur Gesamtemisssion*/
var N = Math.round(100 * ((100 / A) * d)) / 100;
/*Veränderung zu 2008*/
var NV = Math.round(100 * (((d / d_2008) * 100) - 100)) / 100;
/*Diferenz zu 2008*/
var ND = Math.round(100 * (d - d_2008)) / 100;
console.log('Die Emission von Nordamerika ist: ' + d + 'kg CO2. Relativ zur Gesamtemmission der Welt verursacht Nordamerika damit '
    + N + '%.');
console.log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + NV + '% verändert.');
console.log('Im Vergleich zu 2008 sind das ' + ND + 'kg CO2.');
/*Rechnung Südamerika*/
/*Relativ zur Gesamtemisssion*/
var S = Math.round(100 * ((100 / A) * b)) / 100;
/*Veränderung zu 2008*/
var SV = Math.round(100 * (((b / b_2008) * 100) - 100)) / 100;
/*Diferenz zu 2008*/
var SD = Math.round(100 * (b - b_2008)) / 100;
console.log('Die Emission von Südamerika ist: ' + b + 'kg CO2. Relativ zur Gesamtemmission der Welt verursacht Südamerika damit '
    + S + '%.');
console.log('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + SV + '% verändert.');
console.log('Im Vergleich zu 2008 sind das ' + SD + 'kg CO2.');
/*Rechnung Afrika*/
/*Relativ zur Gesamtemisssion*/
var AF = Math.round(100 * ((100 / A) * a)) / 100;
/*Veränderung zu 2008*/
var AFV = Math.round(100 * (((a / a_2008) * 100) - 100)) / 100;
/*Diferenz zu 2008*/
var AFD = Math.round(100 * (a - a_2008)) / 100;
console.log('Die Emission von Afrika ist: ' + a + 'kg CO2. Relativ zur Gesamtemmission der Welt verursacht Afrika damit '
    + AF + '%.');
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + AFV + '% verändert.');
console.log('Im Vergleich zu 2008 sind das ' + AFD + 'kg CO2.');
/*Rechnung Asien*/
/*Relativ zur Gesamtemisssion*/
var AS = Math.round(100 * ((100 / A) * e)) / 100;
/*Veränderung zu 2008*/
var ASV = Math.round(100 * (((e / e_2008) * 100) - 100)) / 100;
/*Diferenz zu 2008*/
var ASD = Math.round(100 * (e - e_2008)) / 100;
console.log('Die Emission von Asien ist: ' + e + 'kg CO2. Relativ zur Gesamtemmission der Welt verursacht Asien damit '
    + AS + '%.');
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + ASV + '% verändert.');
console.log('Im Vergleich zu 2008 sind das ' + ASD + 'kg CO2.');
/*Rechnung Australien*/
/*Relativ zur Gesamtemisssion*/
var AU = Math.round(100 * ((100 / A) * f)) / 100;
/*Veränderung zu 2008*/
var AUV = Math.round(100 * (((f / f_2008) * 100) - 100)) / 100;
/*Diferenz zu 2008*/
var AUD = Math.round(100 * (f - f_2008)) / 100;
console.log('Die Emission von Australien ist: ' + f + 'kg CO2. Relativ zur Gesamtemmission der Welt verursacht Australien damit '
    + AU + '%.');
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + AUV + '% verändert.');
console.log('Im Vergleich zu 2008 sind das ' + AUD + 'kg CO2.');
//# sourceMappingURL=rechnung.js.map