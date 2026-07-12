let currentIndex = 0;

function loadCard() {
    englishSentence.textContent = sentences[currentIndex].english;
    germanSentence.textContent = sentences[currentIndex].german;

    answer.style.display = "none";

    document.querySelector(".progress").textContent =
        `${currentIndex + 1} / ${sentences.length}`;
}

showAnswerBtn.onclick = function () {
    answer.style.display = "block";
};

nextBtn.onclick = function () {
    currentIndex++;
    loadCard();
};

prevBtn.onclick = function () {
    currentIndex--;
    loadCard();
};

loadCard();