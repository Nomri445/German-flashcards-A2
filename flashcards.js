let currentIndex = 0;

function loadCard() {
    const card = sentences[currentIndex];

    document.getElementById("englishSentence").textContent = card.english;
    document.getElementById("germanSentence").textContent = card.german;

    document.getElementById("answer").style.display = "none";

    document.querySelector(".progress").textContent =
        `${currentIndex + 1} / ${sentences.length}`;
}

document.getElementById("showAnswerBtn").onclick = function () {
    document.getElementById("answer").style.display = "block";
};

document.getElementById("nextBtn").onclick = function () {
    currentIndex++;
    
    if (currentIndex >= sentences.length) {
        currentIndex = 0;
    }

    loadCard();
};

document.getElementById("prevBtn").onclick = function () {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = sentences.length - 1;
    }

    loadCard();
};

loadCard();