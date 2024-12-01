window.onload = choosePic;
var ephMenu = new Array("i/ephwpBureau.webp", "i/ephwpDownpour.webp", "i/ephwpFacility.webp", "i/ephwpHabitat.webp", "i/ephwpKanji.webp", "i/ephwpKanjiOld.webp", "i/ephwpLagoon.webp", "i/ephwpSiteOld.webp");

function choosePic() {
    var rndm = Math.floor(Math.random() * ephMenu.length);
    var selectedImage = ephMenu[rndm];
    var mainEphBack = document.getElementById("mainEphBack");
    mainEphBack.style.backgroundImage = "url(" + selectedImage + ")";
    mainEphBack.style.backgroundSize = "cover";
    mainEphBack.style.backgroundPosition = "center";
    titeph.style.zIndex = "1000";
    }