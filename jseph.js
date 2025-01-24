window.onload = choosePic;

var ephBg = new Array("i/b/ephwpBureau.webp","i/b/ephwpDownpour.webp","i/b/ephwpFacility.webp","i/b/ephwpHabitat.webp", "i/b/ephwpKanji.webp", "i/b/ephwpLagoon.webp", "i/b/ephwpSiteOld.webp");

function choosePic() {
     var randomNum = Math.floor(Math.random() * ephBg.length);
     document.getElementById("mainEphBack").src = ephBg[randomNum];
}

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".closebtn");
const thumbnails = document.querySelectorAll(".smallThumb");

thumbnails.forEach(smallThumb => {
    console.log("Adding click listener to", smallThumb);
    smallThumb.addEventListener("click", () => {
        console.log("thumb clicked", smallThumb.src);
        modal.style.display = "flex";
        modalImage.src = smallThumb.src;
        console.log("thumb clicked");
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
