let currentIndex = 0;

function loadCard() {
    document.getElementById("englishSentence").textContent = sentences[currentIndex].english;
    document.getElementById("germanSentence").textContent = sentences[currentIndex].german;

    document.getElementById("answer").style.display = "none";

    document.querySelector(".progress").textContent =
        `${currentIndex + 1} / ${sentences.length}`;
}

document.getElementById("showAnswerBtn").addEventListener("click", () => {
    document.getElementById("answer").style.display = "block";
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentIndex < sentences.length - 1) {
        currentIndex++;
        loadCard();
    }
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadCard();
    }
});

loadCard();