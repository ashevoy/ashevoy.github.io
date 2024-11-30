window.onload = choosePic;

var ephBg = new Array("i/eph1.webp","i/eph2.webp","i/eph3.webp","i/eph4.webp","i/eph5.webp");
var zomBg = new Array("i/zom1.webp","i/zom2.webp","i/zom3.webp","i/zom4.webp");

function choosePic() {
     var randomNum = Math.floor(Math.random() * ephBg.length);
     var randomNumt = Math.floor(Math.random() * zomBg.length);
     document.getElementById("ephPic").src = ephBg[randomNum];
     document.getElementById("zomPic").src = zomBg[randomNumt];
}

function copyPasteDisc() {
     // Get the text field
     var copyText = "inezia";
   
     // Select the text field
     copyText.select();
   
      // Copy the text inside the text field
     navigator.clipboard.writeText(copyText.value);
   } 