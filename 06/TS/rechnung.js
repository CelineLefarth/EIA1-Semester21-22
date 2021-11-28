/*Europa*/
var EU = "Europe";
var EU_2008 = 4965.7;
var EU_2018 = 4209.3;
/*Nordamerika*/
var NA = "Northamerica";
var NA_2008 = 6600.4;
var NA_2018 = 6035.6;
/*Südamerika*/
var SA = "Southamerica";
var SA_2008 = 1132.6;
var SA_2018 = 1261.5;
/*Africa*/
var AFR = "Africa";
var AF_2008 = 1028;
var AF_2018 = 1235.5;
/*Asien*/
var ASI = "Asia";
var AS_2008 = 12954.7;
var AS_2018 = 16274.2;
/*Australien*/
var AUS = "Australia";
var AU_2008 = 1993;
var AU_2018 = 2100.5;
/*Welt*/
var all = EU_2018 + NA_2018 + SA_2018 + AF_2018 + AS_2018 + AU_2018;
/*Berechnung Emissionen*/
function emission(land_name, emissionen_2018, emission_2008) {
    document.querySelector(".countryName").innerHTML = land_name;
    document.querySelector(".countryName1").innerHTML = land_name;
    document.querySelector(".emissionen2018").innerHTML = emissionen_2018.toString();
    document.querySelector(".relativeToWorld").innerHTML = Math.round(emissionen_2018 / all * 100 * 100) / 100 + "%";
    document.querySelector(".growthRate").innerHTML = Math.round((emissionen_2018 - emission_2008) / emission_2008 * 100 * 100 / 100) + "%";
    document.querySelector(".growthRateAbsolute").innerHTML = `${Math.round((emissionen_2018 - emission_2008) * 100) / 100}`;
    var Balken = document.querySelector(".chart");
    Balken.style.height = emissionen_2018 + "px";
}
;
/*Funktion*/
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", function () { emission(EU, EU_2018, EU_2008); });
    document.querySelector(".northamerica").addEventListener("click", function () { emission(NA, NA_2018, NA_2008); });
    document.querySelector(".southamerica").addEventListener("click", function () { emission(SA, SA_2018, SA_2008); });
    document.querySelector(".africa").addEventListener("click", function () { emission(AFR, AF_2018, AF_2008); });
    document.querySelector(".asia").addEventListener("click", function () { emission(ASI, AS_2018, AS_2008); });
    document.querySelector(".australia").addEventListener("click", function () { emission(AUS, AU_2018, AU_2008); });
});
//# sourceMappingURL=rechnung.js.map