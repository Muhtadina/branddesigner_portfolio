const btn = document.getElementById("musicBtn");
const audio = document.getElementById("bgMusic");

let playing = localStorage.getItem("musicState") !== "paused";

function updateState() {
    if (playing) {
        audio.play().catch(()=>{});
        btn.classList.remove("paused");
        localStorage.setItem("musicState", "playing");
    } else {
        audio.pause();
        btn.classList.add("paused");
        localStorage.setItem("musicState", "paused");
    }
}

window.addEventListener("load", () => {
    updateState();
});

btn.addEventListener("click", () => {
    playing = !playing;
    updateState();
});
