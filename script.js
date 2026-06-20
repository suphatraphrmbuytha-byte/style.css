// ดึง Element
const startBtn = document.getElementById("startBtn");
const startPage = document.getElementById("startPage");

const countdownPage = document.getElementById("countdownPage");
const countdownText = document.getElementById("countdown");

const videoPage = document.getElementById("videoPage");
const introVideo = document.getElementById("introVideo");

const messageButtonPage = document.getElementById("messageButtonPage");
const openMessageBtn = document.getElementById("openMessageBtn");

const messagePage = document.getElementById("messagePage");


// ซ่อนทุกหน้า
function hideAllPages() {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });
}


// เริ่มเว็บ
startBtn.addEventListener("click", () => {

    hideAllPages();
    countdownPage.classList.add("active");

    let count = 10;
    countdownText.innerText = count;

    const timer = setInterval(() => {

        count--;
        countdownText.innerText = count;

        // เสียงนับถอยหลัง
        const beep = new Audio(
            "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
        );
        beep.play();

        if (count <= 0) {

            clearInterval(timer);

            hideAllPages();
            videoPage.classList.add("active");

            introVideo.play();

        }

    }, 1000);

});


// เมื่อวิดีโอจบ
introVideo.addEventListener("ended", () => {

    hideAllPages();
    messageButtonPage.classList.add("active");

});


// เปิดข้อความ
openMessageBtn.addEventListener("click", () => {

    hideAllPages();
    messagePage.classList.add("active");

});
const loveBtn = document.getElementById("loveBtn");
const popup = document.getElementById("lovePopup");

loveBtn.addEventListener("click", () => {

    popup.style.display = "flex";

});
